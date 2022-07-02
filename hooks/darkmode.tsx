const colours = {
  light: "white",
  dark: "black",
}

const ToggleMode = () => {
  const bod = document.getElementsByTagName("body")[0];

  const html = document.documentElement;
  let target: string = "";

  if (html.classList.contains("dark")) {
    target = colours.light;
    html.className = "light";
  } else {
    target = colours.dark;
    html.className = "dark";
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

export default ToggleMode;
