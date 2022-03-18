import React, { useRef, useState } from "react";
import { saveLocalStorage } from "../utils/function";

type Props = {
  children: React.ReactNode;
};

export const PokemonContext = React.createContext<any>({} as any);

export const PokemonProvider = ({ children }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [isCached, setIsCatched] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExists, setIsExists] = useState<boolean>(false);

  const usernameRef = useRef<HTMLInputElement>(null);

  const saveDataPokemon = (data: any, uname: string) => {
    const dataLS = JSON.parse(localStorage.getItem("prod") || "[]");
    const duplicate = dataLS.filter(
      (item: any) => item.username === uname
    ).length;
    if (duplicate > 0) {
      setIsExists(true);
    } else {
      data.username = uname;
      setUsername(uname);
      setIsCatched(false);
      setIsExists(false);
      saveLocalStorage(data);
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        username,
        setUsername,
        usernameRef,
        isCached,
        setIsCatched,
        isSaved,
        setIsSaved,
        isRunning,
        setIsRunning,
        isExists,
        setIsExists,
        saveDataPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
