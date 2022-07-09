const config = {
  lightColour: "#fffff4",
  darkColour: "#191a1a",
  lightMode: "light",
  darkMode: "dark",
}

const ToggleMode = () => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

  let target: string = "";

  if (html.classList.contains(config.darkMode)) {
    target = config.lightColour;
    html.className = config.lightMode;
    SetLocal(config.lightMode)
  } else {
    target = config.darkColour;
    html.className = config.darkMode;
    SetLocal(config.darkMode)
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

const CheckLocal = () => {
  const fallback = config.darkMode;
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
    if (setting === config.darkMode) {
      target = config.darkColour;
    }

    if (setting === config.lightMode) {
      target = config.lightColour;
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
