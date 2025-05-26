import { makeBoss } from "../entities/enemyBoss";
import { makeDrone } from "../entities/enemyDrone";
import { makeCartridge } from "../entities/healthCartridge";
import { makePlayer } from "../entities/player";
import { state } from "../state/globalStateManager";
import { makeHealthBar } from "../ui/healthBar";
import { makeCoin } from "../entities/coin";


import {
  setMapColliders,
  setBackgroundColor,
  setCameraControls,
  setCameraZones,
  setExitZones,
  setTipsRtigger,
} from "./roomUtils.js";
import { makeCounter } from "../ui/coinCounter.js";

export async function room1(
  k,
  roomData,
  previousSceneData = { selectedCharacter: "player" }
) {
  const { selectedCharacter } = previousSceneData;
  setBackgroundColor(k, "#cdc3a8");

  const healthBar = makeHealthBar(k)
  const counter = makeCounter(k);

  k.camScale(4);
  k.camPos(170, 100);
  k.setGravity(1000);

  const roomLayers = roomData.layers;

  const map = k.add([k.pos(0, 0), k.sprite("room1")]);
  const colliders = roomLayers[2].objects;

  setMapColliders(k, map, colliders);

  const tips = roomLayers[3].objects;
  setTipsRtigger(k, map, tips)
  
  const player = map.add(makePlayer(k, healthBar, selectedCharacter));
  k.add([
    k.text('hello', { size: 100 }),
    k.pos(k.center().x - 90, k.center().y - 30),
    k.z(1),
    k.color(255, 255, 255),
    k.opacity(1),
    "popup"
  ]);

  setCameraControls(k, player, map, roomData);

  const positions = roomLayers[1].objects;
  for (const position of positions) {
    if (position.name === "player" && !previousSceneData.exitName) {
      player.setPosition(position.x, position.y);
      player.setControls();
      player.enablePassthrough();
      player.setEvents();
      player.respawnIfOutOfBounds(1000, "room1");
      continue;
    }

    if (
      position.name === "entrance-1" &&
      previousSceneData.exitName === "exit-1"
    ) {
      player.setPosition(position.x, position.y);
      player.setControls();
      player.enablePassthrough();
      player.setEvents();
      player.respawnIfOutOfBounds(1000, "room1");
      k.camPos(player.pos);
      continue;
    }

    if (
      position.name === "entrance-2" &&
      previousSceneData.exitName === "exit-2"
    ) {
      player.setPosition(position.x, position.y);
      player.setControls();
      player.enablePassthrough();
      player.setEvents();
      player.respawnIfOutOfBounds(1000, "room1");
      k.camPos(player.pos);
      continue;
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

    if (position.type === "cartridge") {
      map.add(makeCartridge(k, k.vec2(position.x, position.y)));
    }

    if (position.type === "coin") {
      map.add(makeCoin(k, k.vec2(position.x, position.y)));
    }
  }

  const cameras = roomLayers[5].objects;
  setCameraZones(k, map, cameras);

  const exits = roomLayers[4].objects;
  setExitZones(k, map, exits, "room2");

  healthBar.setEvents();
  healthBar.trigger("update");
  k.add(healthBar);

  counter.setEvents();
  counter.trigger("update");
  k.add(counter);
}
