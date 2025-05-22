import { IMyProviderContext } from "@/@types/provider";
import { LocalStorageItems, Modes } from "@/constant";
import i18n from "@/utils/i18n.index";
import getUserLanguage from "@/utils/languageUtils";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext<IMyProviderContext | undefined>(undefined);

export const MyProvider = (props: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(Modes.SYSTEM);
  const [languageI18n] = useState(i18n);

  const changeLanguage = (language: string) => {
    localStorage.setItem(LocalStorageItems.LANGUAGE, language);
    languageI18n.changeLanguage(language);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM;
    setTheme(savedTheme);
    
    const storedLanguage = localStorage.getItem(LocalStorageItems.LANGUAGE) || getUserLanguage();
    languageI18n.changeLanguage(storedLanguage)
  }, [languageI18n]);

  return (
    <MyContext.Provider value={{ theme, setTheme, changeLanguage}}>
      {props.children}
    </MyContext.Provider>
  );
};