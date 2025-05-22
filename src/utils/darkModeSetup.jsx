import { LocalStorageItems, Modes } from "../constant";

function onWindowMatch(theme) {
  if (
    localStorage.theme === Modes.DARK ||
    (!(theme in localStorage) && darkQuery.matches)
  ) {
    document.documentElement.classList.add(Modes.DARK);
  } else {
    document.documentElement.classList.remove(Modes.DARK);
  }
}

function useEffectFunction(theme) {
  switch (theme) {
    case Modes.DARK:
      document.documentElement.classList.add(Modes.DARK);
      localStorage.setItem(LocalStorageItems.THEME, Modes.DARK);
      break;
    case Modes.LIGHT:
      document.documentElement.classList.remove(Modes.DARK);
      localStorage.setItem(LocalStorageItems.THEME, Modes.LIGHT);
      break;
    default:
      localStorage.setItem(LocalStorageItems.THEME, Modes.SYSTEM);
      break;
  }
}

function darkQueryEventListener() {
  const darkQuery = window.matchMedia("prefers-color-scheme: dark");

  darkQuery.addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add(Modes.DARK);
    } else {
      document.documentElement.classList.remove(Modes.DARK);
    }
  });
}

function darkModeSetup(theme) {
  useEffectFunction(theme);
  darkQueryEventListener();
}

export default darkModeSetup;
