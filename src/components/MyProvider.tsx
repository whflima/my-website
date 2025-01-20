import { LocalStorageItems, Modes } from "@/constant";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext<IMyProviderContext | undefined>(undefined);

export const MyProvider = (props: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(Modes.SYSTEM);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </MyContext.Provider>
  );
};