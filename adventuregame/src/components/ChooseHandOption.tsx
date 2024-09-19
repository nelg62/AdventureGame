import { usePlayerStats } from "@/context/CharacterContext";
import { useState } from "react";

export default function ChooseHandOption() {
  const {
    playerHealth,
    attack,
    enemyAttack,
    setPlayerHandChoice,
    setEnemyHandChoice,
    enemyHandChoice,
    setResultsOfGame,
    resultsOfGame,
  } = usePlayerStats();
  //   const [playerHandChoice, setPlayerHandChoice] = useState<string>("");
  //   const [enemyHandChoice, setEnemyHandChoice] = useState<string>("");
  //   const [resultsOfGame, setResultsOfGame] = useState<string>("");

  const [playButtonDisplay, setPlayButtonDisplay] = useState("none");
  const [startButtonDisplay, setStartButtonDisplay] = useState("block");

  function randomNumberFun() {
    const number = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    switch (number) {
      case 1:
        choice = "rock";
        break;
      case 2:
        choice = "paper";
        break;
      case 3:
        choice = "scissors";
        break;
    }
    setEnemyHandChoice(choice);
    return choice;
  }

  const startButtonFun = () => {
    setPlayButtonDisplay("block");
    setStartButtonDisplay("none");
  };

  function checkWhoHasWonRound(
    playerHandChoice: string,
    enemyHandChoice: string
  ) {
    return (
      (playerHandChoice === "rock" && enemyHandChoice === "scissors") ||
      (playerHandChoice === "scissors" && enemyHandChoice === "paper") ||
      (playerHandChoice === "paper" && enemyHandChoice === "rock")
    );
  }

  const checkHand = (e: React.MouseEvent<HTMLElement>) => {
    const playerChoice = e.currentTarget.id;
    console.log("id", playerChoice);
    const enemyChoice = randomNumberFun();
    setPlayerHandChoice(playerChoice);

    console.log("player", playerChoice);
    console.log("enemy", enemyChoice);

    console.log(
      "checkWhohas won",
      checkWhoHasWonRound(playerChoice, enemyChoice)
    );

    if (checkWhoHasWonRound(playerChoice, enemyChoice)) {
      attack();
      setResultsOfGame("wins");
    } else if (enemyChoice === playerChoice) {
      setResultsOfGame("tie");
    } else {
      enemyAttack();
      setResultsOfGame("lose");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="border">Player</div>

        <div className="flex flex-col justify-center col-span-2 pt-3">
          <div style={{ display: `${playButtonDisplay}` }}>
            <h2 className="text-center">Results: {resultsOfGame}</h2>
          </div>
          <div id="heading" style={{ display: `${playButtonDisplay}` }}>
            <h1>Choose your hand</h1>
          </div>
          <button
            id="startbutton"
            onClick={startButtonFun}
            style={{
              display: `${startButtonDisplay}`,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Start!
          </button>

          <div id="chooseabutton">
            <button
              id="rock"
              value="rock"
              name="rockbutton"
              onClick={checkHand}
            >
              <img
                src="rock.png"
                style={{ display: `${playButtonDisplay}` }}
              ></img>
            </button>
            <button
              id="paper"
              value="paper"
              name="paperbutton"
              onClick={checkHand}
            >
              <img
                src="paper.png"
                style={{ display: `${playButtonDisplay}` }}
              ></img>
            </button>
            <button
              id="scissors"
              value="scissors"
              name="scissorsbutton"
              onClick={checkHand}
            >
              <img
                src="scissors.png"
                style={{ display: `${playButtonDisplay}` }}
              ></img>
            </button>
          </div>
        </div>
        <div className="border">Enemy</div>
      </div>
    </div>
  );
}
