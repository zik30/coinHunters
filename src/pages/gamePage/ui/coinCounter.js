import { state } from "../state/globalStateManager.js";

export function makeCounter(k) {
  const counter = k.make([
    k.sprite("counter", { anim: "default" }),
    k.fixed(),
    k.pos(10, 85),
    k.scale(4),
    {
      textObj: null,

      setEvents() {
        this.textObj = k.add([
          k.text(state.current().coin.toString(), { size: 40 }),
          k.pos(this.pos.x + 100, this.pos.y + 10), 
          k.fixed(),
          "coinText"
        ]);

        this.on("update", () => {
          const currentCoin = state.current().coin;

          
          if (state.current().playerHp === 0) {
            k.destroy(this);
            if (this.textObj) k.destroy(this.textObj);
            return;
          }

          
          if (this.textObj) {
            this.textObj.text = currentCoin.toString();
          }
        });
      },
    },
  ]);

  return counter;
}

