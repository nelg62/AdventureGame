import { usePlayerStats } from "@/context/CharacterContext";
import { useState } from "react";

function PlayerStats() {
  const { playerHealth, playerMana, attack, attackSpell, heal } =
    usePlayerStats();

  return (
    <div id="statbox">
      <div id="health"></div>
      <div
        id="healthbar"
        style={{ width: `${playerHealth}%`, textAlign: "center" }}
      >
        {playerHealth}/100
      </div>
      <div id="mana"></div>
      <div
        id="manabar"
        style={{ width: `${playerMana}%`, textAlign: "center" }}
      >
        {playerMana}/100
      </div>

      <div id="valuebuttons">
        <button id="attack" onClick={attackSpell}>
          -10
        </button>
        <button id="heal" onClick={heal}>
          +10
        </button>
      </div>
    </div>
  );
}

export { PlayerStats };
