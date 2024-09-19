import { usePlayerStats } from "@/context/CharacterContext";

function EnemyStats() {
  const { enemyHealth } = usePlayerStats();
  return (
    <div id="enemystatbox">
      <div id="enemyhealth"></div>
      <div
        id="enemyhealthbar"
        style={{ width: `${enemyHealth}%`, textAlign: "center" }}
      >
        {enemyHealth}/100
      </div>
    </div>
  );
}

export { EnemyStats };
