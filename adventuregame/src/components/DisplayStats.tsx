"use client";

import { useState } from "react";
import { PlayerStats } from "./HealthBar";
import { usePlayerStats } from "@/context/CharacterContext";

export default function DisplayStats() {
  const { playerHealth, setPlayerHealth } = usePlayerStats();

  const [playerHandChoice, setPlayerHandChoice] = useState("");
  const [enemyHandChoice, setEnemyHandChoice] = useState("");
  const [resultsOfGame, setResultsOfGame] = useState("");

  const [playButtonDisplay, setPlayButtonDisplay] = useState("none");
  const [startButtonDisplay, setStartButtonDisplay] = useState("block");

  function randomNumberFun() {
    return Math.floor(Math.random() * 3) + 1;
  }

  const startButtonFun = () => {
    setPlayButtonDisplay("block");
    setStartButtonDisplay("none");
  };

  const rockButtonFun = () => {
    setPlayerHandChoice("rock");
    randomNumberFun();

    switch (randomNumberFun()) {
      case 1:
        setEnemyHandChoice("rock");
        setResultsOfGame("Tie");
        break;
      case 2:
        setEnemyHandChoice("paper");
        setResultsOfGame("Lose");
        setPlayerHealth((prevHealth) => Math.max(prevHealth - 10, 0));
        break;
      case 3:
        setEnemyHandChoice("scissors");
        setResultsOfGame("Win");
        // setPlayerHealth((prevHealth) => Math.max(prevHealth + 10, 100));
        break;
    }
  };

  return (
    <>
      <div id="mainscreen">
        <div id="playersection">
          <h1 id="playerChoice">{playerHandChoice}</h1>
          <h2>Results: {resultsOfGame}</h2>
        </div>
        <div id="enemysection">
          <h1 id="enemyChoice">{enemyHandChoice}</h1>
        </div>
      </div>
      <div id="infowindow">
        <PlayerStats />

        <div id="enemystatbox">
          <div id="enemyhealth"></div>
          <div id="enemyhealthbar"></div>
        </div>
      </div>

      <div id="handbuttons">
        <button
          id="startbutton"
          onClick={startButtonFun}
          style={{ display: `${startButtonDisplay}` }}
        >
          Start!
        </button>
        <button
          id="rockbutton"
          onClick={rockButtonFun}
          style={{ display: `${playButtonDisplay}` }}
        >
          Rock
        </button>
        <button id="paperbutton" style={{ display: `${playButtonDisplay}` }}>
          Paper
        </button>
        <button id="scissorsbutton" style={{ display: `${playButtonDisplay}` }}>
          Scissors
        </button>
      </div>
    </>
  );
}
