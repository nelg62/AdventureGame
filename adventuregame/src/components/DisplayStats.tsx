"use client";

import { useState } from "react";
import { PlayerStats } from "./HealthBar";
import { usePlayerStats } from "@/context/CharacterContext";
import { EnemyStats } from "./EnemyStats";
import ChooseHandOption from "./ChooseHandOption";

export default function DisplayStats() {
  const {
    playerHealth,
    attack,
    enemyAttack,
    playerHandChoice,
    resultsOfGame,
    enemyHandChoice,
  } = usePlayerStats();

  // const [playerHandChoice, setPlayerHandChoice] = useState<string>("");
  // const [enemyHandChoice, setEnemyHandChoice] = useState<string>("");
  // const [resultsOfGame, setResultsOfGame] = useState<string>("");

  // const [playButtonDisplay, setPlayButtonDisplay] = useState("none");
  // const [startButtonDisplay, setStartButtonDisplay] = useState("block");

  // function randomNumberFun() {
  //   return Math.floor(Math.random() * 3) + 1;
  // }

  // const startButtonFun = () => {
  //   setPlayButtonDisplay("block");
  //   setStartButtonDisplay("none");
  // };

  // function checkWhoHasWonRound(
  //   playerHandChoice: string,
  //   enemyHandChoice: string | number
  // ) {
  //   return (
  //     (playerHandChoice === "rock" && enemyHandChoice === "scissors") ||
  //     (playerHandChoice === "scissors" && enemyHandChoice === "paper") ||
  //     (playerHandChoice === "paper" && enemyHandChoice === "rock")
  //   );
  // }

  // const checkHand = (e: React.MouseEvent<HTMLElement>) => {
  //   const id = e.currentTarget.id;
  //   console.log("id", id);
  //   setPlayerHandChoice(id);
  //   const enemyHand = randomNumberFun();
  //   switch (enemyHand) {
  //     case 1:
  //       setEnemyHandChoice("rock");
  //       break;
  //     case 2:
  //       setEnemyHandChoice("paper");
  //       break;
  //     case 3:
  //       setEnemyHandChoice("scissors");
  //       break;
  //   }

  //   if (checkWhoHasWonRound(id, enemyHandChoice)) {
  //     attack();
  //     return setResultsOfGame("wins");
  //   } else if (enemyHandChoice === id) {
  //     return setResultsOfGame("tie");
  //   } else {
  //     enemyAttack();
  //     return setResultsOfGame("lose");
  //   }
  // };
  const playerChoiceImage = `${playerHandChoice}.png`;
  const enemyChoiceImage = `${enemyHandChoice}.png`;

  return (
    <div className="h-full">
      <div id="mainscreen" className="grid grid-cols-2 h-2/4">
        <div
          id="playersection"
          className="flex flex-col items-center justify-center"
        >
          <img src={playerChoiceImage} alt={playerHandChoice} />
          <h1 id="playerChoice">{playerHandChoice}</h1>
        </div>
        <div
          id="enemysection"
          className="flex flex-col items-center justify-center"
        >
          <img src={enemyChoiceImage} alt={enemyHandChoice} />
          <h1 id="enemyChoice">{enemyHandChoice}</h1>
        </div>
      </div>

      <div id="infowindow" className="h-2/4">
        <div className="flex flex-col w-full border">
          <ChooseHandOption />
          <div className="flex flex-row absolute inset-x-0 bottom-0">
            <PlayerStats />

            <EnemyStats />
          </div>
        </div>
      </div>
    </div>
  );
}
