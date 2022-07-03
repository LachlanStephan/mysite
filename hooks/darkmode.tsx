const colours = {
  w: "white",
  b: "black",
  l: "light",
  d: "dark",
}

const ToggleMode = () => {
  const bod = document.getElementsByTagName("body")[0];

  const html = document.documentElement;
  let target: string = "";

  if (html.classList.contains(colours.d)) {
    target = colours.w;
    html.className = colours.l;
  } else {
    target = colours.b;
    html.className = colours.d;
  }
  
  toggleBody(bod, target);
};

const toggleBody = (bod: HTMLElement, target: string) => {
  bod.style.backgroundColor = target;
}

export default ToggleMode;
