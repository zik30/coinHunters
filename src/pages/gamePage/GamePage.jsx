import React, {useEffect, useRef, useState} from "react";
import { initKaboom, loadAssets } from "./kaboomLoader";
import { room1 } from "./scenes/room1";
import { setBackgroundColor } from "./scenes/roomUtils";
import { room2 } from "./scenes/room2";
import { makeNotificationBox } from "./ui/notificationBox";
import { characterSelection } from "./scenes/characterSelection";
import { directionSelector } from "./scenes/directionSelector";
import style from './GamePage.module.scss'
import useUserStore from "../../store/store.js";

const Game = () => {
   const {setCoin} = useUserStore()
  const canvasRef = useRef(null);
  const [coinCount, setCoinCount] = useState(0);
  const {coin} = useUserStore()

 useEffect(()=>{
   coinCount > coin ? setCoin(coinCount) : coin
 },[coinCount])
  console.log(coin)

  useEffect(() => {
    if (!canvasRef.current) return;

    const k = initKaboom(canvasRef.current);
    loadAssets(k);

    async function main() {
      const room1Data = await (await fetch("/maps/map-level-1.9.tmj")).json();
      const room2Data = await (await fetch("/maps/map-level-2.11.tmj")).json();

      k.scene("room1", (previousSceneData) => {
        room1(k, room1Data,setCoinCount, previousSceneData);
      });
      k.scene("room2", (previousSceneData) => {
        room2(k, room2Data,setCoinCount, previousSceneData);
      });

      k.scene("final-exit", () => {
        setBackgroundColor(k, "#20214a");
        k.add(
          makeNotificationBox(
            k,
            "You escaped the factory!\n The End. Thanks for playing!\n\nPress ENTER to go\n to the leaderboard."
          )
        );
        k.onKeyPress((enter)=>{
          window.location.href = "/leaderboard";
        })
      });

    }

    k.scene("characterSelection", characterSelection);
    k.scene("directionSelector",() => directionSelector(k) )
    k.scene("room1", (ctx) => room1(k, ctx,setCoinCount));
    k.scene("room2", (ctx) => room2(k, ctx));

    k.scene("intro", () => {
      setBackgroundColor(k, "#20214a");
      k.add(
        makeNotificationBox(
          k,
          "Escape the factory!\nUse arrow keys to move, x to jump, z to attack.\nPress Enter to start!"
        )
      );
      k.onKeyPress("enter", () => {
        // makes audio will be enabled before the game starts
        const context = new AudioContext();
        context.resume();
        k.go("room1", { exitName: null });
      });
    });

    k.go("directionSelector");
    main();

    return () => {
      if (k) k.destroyAll();
    };
  }, []);

  return <canvas className={style.game} ref={canvasRef} />;
};

export default Game;