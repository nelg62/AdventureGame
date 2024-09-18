import { usePlayerStats } from "@/context/CharacterContext";
import { useState } from "react";

function PlayerStats() {
  const { playerHealth, attack, heal } = usePlayerStats();

  return (
    <div id="statbox">
      <div id="health"></div>
      <div id="healthbar" style={{ width: `${playerHealth}%` }}></div>
      <div id="mana"></div>
      <div id="manabar"></div>

      <div id="valuebuttons">
        <button id="attack" onClick={attack}>
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
