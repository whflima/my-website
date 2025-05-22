import { IMyProviderContext } from "@/@types/provider";
import { LocalStorageItems, Modes } from "@/constant";
import i18n from "@/utils/i18n.index";
import getUserLanguage from "@/utils/languageUtils";
import darkModeSetup from "@/utils/darkModeSetup";
import { createContext, useContext, useEffect, useState } from "react";

export const MyContext = createContext<IMyProviderContext | undefined>(undefined);

export const MyProvider = (props: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(Modes.SYSTEM);
  const [languageI18n] = useState(i18n);

  const changeLanguage = (language: string) => {
    localStorage.setItem(LocalStorageItems.LANGUAGE, language);
    languageI18n.changeLanguage(language);
  };

  const changeTheme = (theme: string) => {
    localStorage.setItem(LocalStorageItems.THEME, theme);
    setTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM;
    setTheme(savedTheme);
    
    const storedLanguage = localStorage.getItem(LocalStorageItems.LANGUAGE) || getUserLanguage();
    languageI18n.changeLanguage(storedLanguage)
  }, [languageI18n]);

  useEffect(() => {
    darkModeSetup(theme);
  }, [theme]);

  return (
    <MyContext.Provider value={{ theme, setTheme, changeTheme, changeLanguage}}>
      {props.children}
    </MyContext.Provider>
  );
};

export const useProvider = (): IMyProviderContext => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};