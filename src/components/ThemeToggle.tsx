import { Switch } from "@heroui/react";
import { SunIcon, MoonIcon } from "lucide-react";
import darkModeSetup from "../utils/darkModeSetup";
import { useContext } from "react";
import { MyContext } from "./MyProvider";
import { Modes } from "@/constant";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(MyContext) as IMyProviderContext;
  darkModeSetup(theme);
  
  return (
    <Switch
      checked={theme === "dark"}
      onChange={() => setTheme(theme === Modes.DARK ? Modes.LIGHT : Modes.DARK)}
      size="lg"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
