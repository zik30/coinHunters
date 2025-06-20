import kaboom from "kaboom";

export const scale = 2;
export let k; 

export function initKaboom(canvas) {
  k = kaboom({
    width: 640 * scale,
    height: 360 * scale,
    scale,
    letterbox: true,
    clearColor: [0, 0, 0, 1],
    canvas,
    global: true,
  });
  return k;
}

export function loadAssets(k) {
  k.loadFont("glyphmesss", "./assets/glyphmesss.ttf");

  k.loadSprite("player", "/src/assets/sprites/u.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("player2", "/src/assets/sprites/u2.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("player3", "/src/assets/sprites/u3.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });

  k.loadSprite("drone", "/src/assets/sprites/dr0ne.png", {
    sliceX: 6,
    sliceY: 3,
    anims: {
      flying: { from: 0, to: 3, loop: true },
      attack: { from: 6, to: 11, loop: true },
      explode: { from: 12, to: 17 },
    },
  });

  k.loadSprite("burner", "/src/assets/sprites/burn3r.png", {
    sliceX: 5,
    sliceY: 6,
    anims: {
      idle: { from: 0, to: 3, loop: true },
      run: { from: 6, to: 8, loop: true },
      "open-fire": { from: 10, to: 14 },
      fire: { from: 15, to: 18, loop: true },
      "shut-fire": { from: 20, to: 23 },
      explode: { from: 25, to: 29 },
    },
  });

  k.loadSpriteAtlas("./assets/ui.png", {
    healthBar: {
      x: 16,
      y: 16,
      width: 60,
      height: 48,
      sliceY: 3,
    },
  });

  k.loadSpriteAtlas("./assets/animations.png", {
    cartridge: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 4, loop: true, speed: 7 },
      },
    },
  });

  k.loadSpriteAtlas("./assets/coin.png", {
    coin: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 3, loop: true, speed: 7 },
      },
    },
  });

  k.loadSpriteAtlas("./assets/coin.png", {
    counter: {
      x: 125,
      y: 145,
      width: 134,
      height: 16,
      sliceX: 8,
      anims: {
        default: { from: 0, to: 3, loop: true, speed: 7 },
      },
    },
  });

  k.loadSprite("tileset", "./assets/tileset.png", {
    sliceX: 33,
    sliceY: 21,
  });

  k.loadSprite("background", "./assets/background.png", {
    sliceX: 13,
    sliceY: 25,
  });

  k.loadSound("notify", "./assets/sounds/notify.mp3");
  k.loadSound("boom", "./assets/sounds/Ahtung.m4a");
  k.loadSound("health", "./assets/sounds/Aliluya.m4a");
  k.loadSound("flamethrower", "./assets/sounds/flamethrower.mp3");
  k.loadSound("Akjol-1", "/src/assets/sounds/Akjol-1.m4a");
  k.loadSound("Akjol-2", "/src/assets/sounds/Akjol-2.m4a");
  k.loadSound("Egor-1", "/src/assets/sounds/Egor-1.m4a");
  k.loadSound("Egor-2", "/src/assets/sounds/Egor-2.m4a");
  k.loadSound("Felix-Ahtung", "/src/assets/sounds/Felix-Ahtung.m4a");
  k.loadSound("Felix-Aliluya", "/src/assets/sounds/Felix-Aliluya.m4a");
  k.loadSound("Nurdin-1", "/src/assets/sounds/Nurdin-1.m4a");
  k.loadSound("Nurdin-2", "/src/assets/sounds/Nurdin-2.m4a");

  k.loadSprite("room1", "./maps/room1.png");
  k.loadSprite("room2", "./maps/room2.png");
  k.loadSprite("front1", "/src/assets/sprites/AkjolSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front2", "/src/assets/sprites/BakstybekSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front3", "/src/assets/sprites/EgorSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front4", "/src/assets/sprites/FelixSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("front5", "/src/assets/sprites/NurdinSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back1", "/src/assets/sprites/ElhanSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back2", "/src/assets/sprites/EvgeniySprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back3", "/src/assets/sprites/IgorSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back4", "/src/assets/sprites/KanatSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("back5", "/src/assets/sprites/RadomirSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
  k.loadSprite("mob1", "/src/assets/sprites/AlbertJSprite.png", {
    sliceX: 8,
    sliceY: 9,
    anims: {
      idle: { from: 0, to: 7, loop: true },
      run: { from: 8, to: 13, loop: true },
      jump: { from: 51, to: 51, loop: true },
      fall: { from: 54, to: 54, loop: true },
      explode: { from: 64, to: 69 },
      attack: { from: 24, to: 28, speed: 16 },
    },
  });
}