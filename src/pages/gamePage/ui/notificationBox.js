import { state, statePropsEnum } from "../state/globalStateManager";

export function makeNotificationBox(k, content) {
  state.set(statePropsEnum.pause, true)
  console.log(state.current().pause);
  
  const container = k.make([
    k.rect(480, 100),
    k.color(k.Color.fromHex("#20214a")),
    k.fixed(),
    k.pos(k.center()),
    k.area(),
    k.anchor("center"),
    {
      close() {
        state.set(statePropsEnum.pause, false)
        k.destroy(this);
        console.log(state.current().pause);
      },
    },
  ]);
  container.add([
    k.text(content, {
      font: "glyphmesss",
      size: 32,
    }),
    k.color(k.Color.fromHex("#eacfba")),
    k.area(),
    k.anchor("center"),
  ]);

  return container;
}
