import { theme } from "../tailwind.config.js";

const colours = theme.extend.colors;
const class_name = {
  dark: "dark",
  light: "light",
}

// Probably need to get rid of this and integrate something with tailwind 
const ToggleMode = () => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

  let target: string = "";

  if (html.classList.contains(class_name.dark)) {
    target = colours.light_background;
    html.className = class_name.light;
    SetLocal(class_name.light)
  } else {
    target = colours.dark_background;
    html.className = class_name.dark;
    SetLocal(class_name.dark);
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

const CheckLocal = () => {
  const fallback = class_name.dark;
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
    if (setting === class_name.dark) {
      target = colours.dark_background;
    }

    if (setting === class_name.light) {
      target = colours.light_background;
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
