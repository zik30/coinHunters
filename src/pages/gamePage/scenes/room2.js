import { makeCoin } from "../entities/coin.js";
import { makeBoss } from "../entities/enemyBoss.js";
import { makeDrone } from "../entities/enemyDrone.js";
import { makeCartridge } from "../entities/healthCartridge.js";
import { makePlayer } from "../entities/player.js";
import { state } from "../state/globalStateManager.js";
import { makeCounter } from "../ui/coinCounter.js";
import { makeHealthBar } from "../ui/healthBar.js";
import {
  setBackgroundColor,
  setMapColliders,
  setCameraZones,
  setExitZones,
  setCameraControls,
} from "./roomUtils.js";

export function room2(
  k,
  roomData,
  setCoinCount,
  previousSceneData = { selectedCharacter: "player" }
) {
  const { selectedCharacter } = previousSceneData || {};
  const spriteName = selectedCharacter?.sprite || "player";
  const attackSounds = [];
  if (selectedCharacter?.sound1) attackSounds.push(selectedCharacter.sound1);
  if (selectedCharacter?.sound2) attackSounds.push(selectedCharacter.sound2);
  const pickupSound = attackSounds[0] || "health";

  setBackgroundColor(k, "#cdc3a8");

  const healthBar = makeHealthBar(k);
  const counter = makeCounter(k);

  k.camScale(4);
  k.camPos(170, 700);
  k.setGravity(1000);

  const roomLayers = roomData.layers;
  const map = k.add([k.pos(0, 0), k.sprite("room2")]);

  const colliders = roomLayers[1].objects;
  setMapColliders(k, map, colliders);

  const player = k.add(makePlayer(k, healthBar, spriteName, attackSounds));

  setCameraControls(k, player, map, roomData);

  const positions = roomLayers[2].objects;
  for (const position of positions) {
    if (position.name === "entrance-1" && previousSceneData.exitName === "exit-1") {
      player.setPosition(position.x + map.pos.x, position.y + map.pos.y);
      player.setControls();
      player.enablePassthrough();
      player.setEvents();
      continue;
    }

    if (position.name === "entrance-2" && previousSceneData.exitName === "exit-2") {
      player.respawnIfOutOfBounds(1000, "room2", { exitName: "exit-2" });
      k.camPos(player.pos);
    }

    if (position.type === "cartridge") {
      map.add(makeCartridge(k, k.vec2(position.x, position.y), pickupSound));
    }

    if (position.type === "coin") {
      map.add(makeCoin(k, k.vec2(position.x, position.y), setCoinCount, pickupSound));
    }

    if (position.type === "drone") {
      const drone = map.add(makeDrone(k, k.vec2(position.x, position.y)));
      drone.setBehavior();
      drone.setEvents();
      continue;
    }

    if (position.name === "boss" && !state.current().isBossDefeated) {
      const boss = map.add(makeBoss(k, k.vec2(position.x, position.y)));
      boss.setBehavior();
      boss.setEvents();
    }
  }

  const cameras = roomLayers[3].objects;

  setCameraZones(k, map, cameras);

  const exits = roomLayers[4].objects;
  setExitZones(k, map, exits, "room1", selectedCharacter);

  healthBar.setEvents();
  healthBar.trigger("update");
  k.add(healthBar);

  counter.setEvents();
  counter.trigger("update");
  k.add(counter);
}
