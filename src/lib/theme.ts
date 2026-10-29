export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before the first paint, so the page never flashes the wrong theme.
// Uses the saved choice if there is one, otherwise the system setting.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var d=document.documentElement;d.classList.toggle("dark",t==="dark");d.style.colorScheme=t}catch(e){}})()`;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Switch instantly. Without this, every card, button and border runs its
  // own colour transition at once, which makes the toggle feel slow. The
  // style is removed right after, so hover transitions keep working.
  const noTransitions = document.createElement("style");
  noTransitions.textContent =
    "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(noTransitions);

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;

  // Make the browser apply the new colours now, while transitions are off
  window.getComputedStyle(document.body).getPropertyValue("color");
  setTimeout(() => noTransitions.remove(), 1);
}

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
