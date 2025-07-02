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
    { name: "front4", sprite: "uxui1", description: "UX/UI Janat"},
    { name: "front5", sprite: "uxui2", description: "UX/UI Aidana"},
  ];
  const charactersB = [
    { name: "back1", sprite: "back1", description: "Backend Elhan" },
    { name: "back4", sprite: "back4", description: "Backend Kanat" },
     ];
  const charactersA = [
    { name: "mob1", sprite: "mob1"
      , description: "Android Developer Albert"
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