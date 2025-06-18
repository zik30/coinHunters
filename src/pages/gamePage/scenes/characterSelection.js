export function characterSelection(ctx) {
  const k = ctx.k || window.k;
  const selectedDirection = ctx.selectedDirection || "frontend";
  console.log("Selected Direction:", selectedDirection);
 
  k.add([
    k.rect(k.width(), k.height()),
    k.pos(0, 0),
    k.color(0, 0, 20),
  ]);

  k.add([
    k.text("Выберите персонажа", { size: 24 }),
    k.pos(k.width() / 2, 50),
    k.anchor("center"),
  ]);

  const characters = [];
  const charactersF = [
    { name: "player", sprite: "player", description: "Frontend Mentor" },
   
    { name: "front1", sprite: "front1", description: "Frontend Akjol", sound1: "Akjol-1", sound2: "Akjol-2" },
    { name: "front2", sprite: "front2", description: "Frontend Baktybek", sound1: "Egor-1", sound2: "Egor-2" },
    { name: "front3", sprite: "front3", description: "Frontend Egor" },
    { name: "front4", sprite: "front4", description: "Frontend Felix",sound1: "Felix-Ahtung", sound2: "Felix-Aliluya" },
    { name: "front5", sprite: "front5", description: "Frontend Nurdin", sound1: "Nurdin-1", sound2: "Nurdin-2" },
  ];
  const charactersB = [
    { name: "player", sprite: "player", description: "Backend Developer" },
    { name: "player2", sprite: "player2", description: "Backend Developer" },
    { name: "player3", sprite: "player3", description: "Backend Developer" },
    { name: "back1", sprite: "back1", description: "Backend Elhan" },
    { name: "back2", sprite: "back2", description: "Backend Evgeniy" },
    { name: "back3", sprite: "back3", description: "Backend Igor" },
    { name: "back4", sprite: "back4", description: "Backend Kanat" },
    { name: "back5", sprite: "back5", description: "Backend Radomir" },
  ];
  const charactersA = [
    { name: "mob1", sprite: "mob1"
      , description: "Android Developer"
     },
    { name: "player2", sprite: "player2" 
      , description: "Android Developer"
    },
    { name: "player3", sprite: "player3" 
      , description: "Android Developer"
    },
    { name: "player3", sprite: "player3"
      , description: "Android Developer"
     },
  ];

  if (selectedDirection === "frontend") {
    characters.push(...charactersF);
  } else if (selectedDirection === "backend") {
    characters.push(...charactersB);
  } else if (selectedDirection === "android") {
    characters.push(...charactersA);
  } else if (selectedDirection === "ux/ui") {
    characters.push(...charactersF);
  }
  const rowLength = 4;
  const spacingX = 150;
  const spacingY = 180;
  characters.forEach((character, index) => {
    const row = Math.floor(index / rowLength);
    const col = index % rowLength;
    const totalInRow = Math.min(rowLength, characters.length - row * rowLength);
    const startX = k.width() / 2 - ((totalInRow - 1) * spacingX) / 2;
    const x = startX + col * spacingX;
    const y = k.height() / 2 + row * spacingY;

    const box = k.add([
      k.rect(100, 100),
      k.pos(x, y),
      k.color(255, 255, 0),
      k.anchor("center"),
      k.area(),
      k.outline(2, k.rgb(255, 255, 255)),
      "characterBox",
      { name: character.name },
    ]);

    k.add([
      k.sprite(character.sprite, { anim: "idle" }),
      k.pos(x, y - 20),
      k.anchor("center"),
      k.scale(2),
    ]);

    let descLabel = null;

    box.onHover(() => {
      if (!descLabel) {
        descLabel = k.add([
          k.text(character.description || "No description", { size: 12 }),
          k.pos(x, y + 70),
          k.anchor("center"),
          "descLabel",
        ]);
      }
    });

    box.onHoverEnd(() => {
      if (descLabel) {
        k.destroy(descLabel);
        descLabel = null;
      }
    });

    box.onClick(() => {
      k.go("room1", { selectedCharacter: character });
    });
  });

  
  k.onKeyPress("up", () => {
  });
}