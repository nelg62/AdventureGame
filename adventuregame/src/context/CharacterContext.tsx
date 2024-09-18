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
  setPlayerHealth: React.Dispatch<SetStateAction<number>>;
  attack: () => void;
  heal: () => void;
}

const PlayerStatsContext = createContext<PlayerStatsContexeType | undefined>(
  undefined
);

export const PlayerStatsProvider = ({ children }: { children: ReactNode }) => {
  const [playerHealth, setPlayerHealth] = useState(100);

  const attack = () => {
    setPlayerHealth((prevHealth) => Math.max(prevHealth - 10, 0));
  };

  const heal = () => {
    setPlayerHealth((prevHealth) => Math.min(prevHealth + 10, 100));
  };

  return (
    <PlayerStatsContext.Provider
      value={{ playerHealth, setPlayerHealth, attack, heal }}
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
