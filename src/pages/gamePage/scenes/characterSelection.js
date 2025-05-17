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
    { name: "player", sprite: "player",
      description: "Frontend Developer" 
     },
    { name: "player2", sprite: "player2"
      , description: "Frontend Developer"
     },
    { name: "player3", sprite: "player3" 
      , description: "Frontend Developer"
     }
  ];
  const charactersB = [
    { name: "player", sprite: "player" 
      , description: "Backend Developer"
    },
    { name: "player2", sprite: "player2" 
      , description: "Backend Developer"
    },
    { name: "player3", sprite: "player3" 
      , description: "Backend Developer"
    },
  ];
  const charactersA = [
    { name: "player", sprite: "player"
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
  characters.forEach((character, index) => {
    const x = k.width() / 2 - 150 + index * 150;
    const y = k.height() / 2;

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
      k.go("room1", { selectedCharacter: character.name });
    });
  });

  
  k.onKeyPress("up", () => {
  });
}