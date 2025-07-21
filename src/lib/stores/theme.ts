import { writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme = "light" | "dark" | "slate";

const defaultTheme: Theme = "light";
const storageKey = "portfolio-theme";

function createThemeStore() {
  const initialTheme = browser
    ? (localStorage.getItem(storageKey) as Theme) || defaultTheme
    : defaultTheme;

  const { subscribe, set, update } = writable<Theme>(initialTheme);

  return {
    subscribe,
    setTheme: (theme: Theme) => {
      if (browser) {
        localStorage.setItem(storageKey, theme);

        const root = document.documentElement;
        root.classList.remove("light", "dark", "slate");
        root.classList.add(theme);
      }
      set(theme);
    },
  };
}

export const theme = createThemeStore();
