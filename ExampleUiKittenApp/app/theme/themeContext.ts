import { createContext, useContext, useEffect, useState } from "react";
import * as eva from "@eva-design/eva";

export const enum Theme {
  light = "light",
  dark = "dark",
}

export const themeOptions = ["light", "dark"];

interface IThemeContext {
  value: Record<string, string>;
  switchTheme: (value: string) => void;
}

/**
 * Create a context to interact with the theme
 * from anywhere in the app
 */
const ThemeContext = createContext<IThemeContext>({
  value: eva.light,
  switchTheme: () => undefined,
});

/**
 * The provider that we will use to expose the theme
 */
export const ThemeContextProvider = ThemeContext.Provider;

/**
 * A hook that screens can use to gain access to the theme
 */
export const useCustomTheme = () => useContext(ThemeContext);

/**
 * Return the eva theme corresponding to a key {"light", "dark"}
 */
function getThemeFromKey(key: string) {
  if (key === Theme.light) {
    return eva.light;
  }
  if (key === Theme.dark) {
    return eva.dark;
  }

  // if no matching key, return light theme by default
  return eva.light;
}

/**
 * Return the key corresponding to eva theme {"eva.light", "eva.dark"}
 */
export function getKeyFromTheme(theme: object) {
  if (theme === eva.light) {
    return Theme.light;
  }
  if (theme === eva.dark) {
    return Theme.dark;
  }

  // if no matching theme, return light key by default
  return Theme.light;
}

/**
 * Get current theme
 * @returns current theme
 */
async function getThemeAsync(): Promise<string> {
  return eva.light;
}

/**
 * Returns true iff the selected theme is light
 * @param selected theme
 */
export function isLightTheme(theme: object) {
  return theme === eva.light;
}

/**
 * Custom hook for persisting theme
 */
export function useThemePersistence() {
  const [theme, setTheme] = useState(eva.light);

  const onThemeChange = (nextTheme: string) => {
    setTheme(getThemeFromKey(nextTheme));
  };

  const restoreTheme = async () => {
    const initialTheme = await getThemeAsync();
    setTheme(initialTheme);
  };

  useEffect(() => {
    restoreTheme();
  }, []);

  return { theme, onThemeChange };
}
