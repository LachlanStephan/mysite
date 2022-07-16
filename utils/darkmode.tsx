import { theme } from "../theme.js";

// Probably need to get rid of this and integrate something with tailwind 
const ToggleMode = () => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

  let target: string = "";

  if (html.classList.contains(theme.dark.name)) {
    target = theme.light.background;
    html.className = theme.light.name;
    SetLocal(theme.light.name)
  } else {
    target = theme.dark.background;
    html.className = theme.dark.name;
    SetLocal(theme.dark.name);
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

const CheckLocal = () => {
  const fallback = theme.dark.name;
  const savedTheme =  localStorage.getItem("theme");
  return savedTheme ? savedTheme : fallback;
}

const SetLocal = (theme: string) => {
  localStorage.setItem("theme", theme);
}

const SetMode = (setting: string) => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

    let target: string = "";
    if (setting === theme.dark.name) {
      target = theme.dark.background;
    }

    if (setting === theme.light.name) {
      target = theme.light.background;
    }

    bod.style.backgroundColor = target;
    html.className = setting;
    SetLocal(setting);
}

export {
  ToggleMode,
  SetMode,
  CheckLocal,
}
