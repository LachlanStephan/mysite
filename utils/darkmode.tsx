const colours = {
  w: "white",
  b: "black",
  l: "light",
  d: "dark",
}

const ToggleMode = () => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

  let target: string = "";

  if (html.classList.contains(colours.d)) {
    target = colours.w;
    html.className = colours.l;
    SetLocal(colours.l)
  } else {
    target = colours.b;
    html.className = colours.d;
    SetLocal(colours.d)
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

const CheckLocal = () => {
  const savedTheme =  localStorage.getItem("theme");
  return savedTheme ? savedTheme : "dark";
}

const SetLocal = (theme: string) => {
  localStorage.setItem("theme", theme);
}

const SetMode = (setting: string) => {
const html = document.documentElement;
const bod = document.getElementsByTagName("body")[0];

    let target: string = "";
    if (setting === colours.d) {
      target = colours.b;
    }

    if (setting === colours.l) {
      target = colours.w;
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
