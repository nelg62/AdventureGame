"use client";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PlayerStatsContexeType {
  playerHealth: number;
  enemyHealth: number;
  setPlayerHealth: React.Dispatch<SetStateAction<number>>;
  setPlayerMana: React.Dispatch<SetStateAction<number>>;
  attack: () => void;
  attackSpell: () => void;
  enemyAttack: () => void;
  heal: () => void;
  setPlayerHandChoice: React.Dispatch<SetStateAction<string>>;
  playerHandChoice: string;
  setEnemyHandChoice: React.Dispatch<SetStateAction<string>>;
  enemyHandChoice: string;
  setResultsOfGame: React.Dispatch<SetStateAction<string>>;
  resultsOfGame: string;
  playerMana: number;
}

const PlayerStatsContext = createContext<PlayerStatsContexeType | undefined>(
  undefined
);

export const PlayerStatsProvider = ({ children }: { children: ReactNode }) => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

  const [playerMana, setPlayerMana] = useState(100);

  const [playerHandChoice, setPlayerHandChoice] = useState<string>("");
  const [enemyHandChoice, setEnemyHandChoice] = useState<string>("");

  const [resultsOfGame, setResultsOfGame] = useState<string>("");

  const attackSpell = () => {
    setEnemyHealth((prevHealth) => Math.max(prevHealth - 10, 0));
    setPlayerMana((prevMana) => Math.max(prevMana - 50, 0));
  };

  const attack = () => {
    setEnemyHealth((prevHealth) => Math.max(prevHealth - 10, 0));
  };

  const heal = () => {
    setPlayerHealth((prevHealth) => Math.min(prevHealth + 10, 100));
    setPlayerMana((prevMana) => Math.max(prevMana - 50, 0));
  };

  const enemyAttack = () => {
    setPlayerHealth((prevHealth) => Math.max(prevHealth - 10, 0));
  };

  return (
    <PlayerStatsContext.Provider
      value={{
        playerHealth,
        enemyHealth,
        setPlayerHealth,
        attack,
        enemyAttack,
        heal,
        setPlayerHandChoice,
        playerHandChoice,
        setEnemyHandChoice,
        enemyHandChoice,
        setResultsOfGame,
        resultsOfGame,
        setPlayerMana,
        playerMana,
        attackSpell,
      }}
    >
      {children}
    </PlayerStatsContext.Provider>
  );
};

export const usePlayerStats = () => {
  const context = useContext(PlayerStatsContext);
  if (!context) {
    throw new Error("player stats must be used withing the provider");
  }
  return context;
};
