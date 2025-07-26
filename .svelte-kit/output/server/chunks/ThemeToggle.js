import "clsx";
import { B as pop, z as push } from "./index.js";
import { w as writable } from "./index2.js";
import { I as Icons } from "./Icons.js";
const defaultTheme = "light";
function createThemeStore() {
  const initialTheme = defaultTheme;
  const { subscribe, set, update } = writable(initialTheme);
  return {
    subscribe,
    setTheme: (theme2) => {
      set(theme2);
    }
  };
}
const theme = createThemeStore();
function ThemeToggle($$payload, $$props) {
  push();
  theme.subscribe((value) => {
  });
  $$payload.out.push(`<button class="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 slate:border-slate-600 slate:bg-slate-800 slate:text-slate-300 slate:hover:bg-slate-700" aria-label="Toggle theme">`);
  Icons($$payload, {
    name: "sun",
    size: 20,
    class: "rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> `);
  Icons($$payload, {
    name: "moon",
    size: 20,
    class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 slate:rotate-180 slate:scale-0"
  });
  $$payload.out.push(`<!----> <svg class="absolute h-5 w-5 rotate-180 scale-0 transition-all slate:rotate-0 slate:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>`);
  pop();
}
export {
  ThemeToggle as T
};
