import { Switch } from "@heroui/react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useProvider } from "./MyProvider";
import { Modes } from "@/constant";

export default function ThemeToggle() {
  const { theme, setTheme } = useProvider();

  return (
    <Switch
      checked={theme === "dark"}
      isSelected={theme === "dark"}
      onChange={() => setTheme(theme === Modes.DARK ? Modes.LIGHT : Modes.DARK)}
      size="md"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
