export function directionSelector(k) {
    k.add([
        k.rect(k.width(), k.height()),
        k.pos(0, 0),
        k.color(0, 0, 20),
    ]);
    
    k.add([
        k.text("Выберите направление", { size: 24 }),
        k.pos(k.width() / 2, 50),
        k.anchor("center"),
    ]);
    
    const directions = [
        { name: "frontend", text: "frontend",
            img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" // HTML5
         },
        { name: "backend", text: "backend",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" // Python
         },
        { name: "android", text: "android",
            img: "https://cdn-icons-png.flaticon.com/512/226/226770.png" // Java
         },
        { name: "ux/ui", text: "ux/ui",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" // Figma
         },
    ];
    
    k.loadSprite("frontendBg", directions[0].img);
    k.loadSprite("backendBg", directions[1].img);
    k.loadSprite("androidBg", directions[2].img);
    k.loadSprite("ux/uiBg", directions[3].img);

    directions.forEach((direction, index) => {
      const x = k.width() / 2 - 300 + index * 180; 
      const y = k.height() / 2;
    
      const bgSprite = direction.name + "Bg";
    
      const img = k.add([
        k.sprite(bgSprite),
        k.pos(x, y),
        k.anchor("center"),
        k.scale(0.2), 
        `img-${direction.name}`,
      ]);
    
      const box = k.add([
        k.rect(120, 120), 
        k.pos(x, y),
        k.opacity(0), 
        k.anchor("center"),
        k.area(),
        k.outline(2, k.rgb(255, 255, 255)),
        "directionBox",
        { name: direction.name },
      ]);
      
      box.onHover(() => {
        img.scale = 0.3;
              
    });
      box.onHoverEnd(() => {
        img.scale = 0.2;
      });
      box.add([
        k.text(direction.text, { size: 16 }),
        k.pos(0, 100),
        k.anchor("center"),
      ])

      box.onClick(() => {
        k.go("characterSelection", { k, selectedDirection: direction.name });
        console.log("Selected Direction:", direction.name);
      });
    });
}