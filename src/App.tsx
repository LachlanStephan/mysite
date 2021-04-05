import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Works from "./components/works/works";
import Skills from "./components/skills/skills";
import { FaNode } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextDotJs,
  SiGit,
  SiNeovim,
  SiMysql,
  SiJava,
  SiPython,
  SiDocker,
  SiNpm,
  SiWebpack,
  SiJest,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

// Current skill icons
const JS = <SiJavascript />;
const PHP = <SiPhp />;
const TS = <SiTypescript />;
const ReactIcon = <SiReact />;
const html5 = <SiHtml5 />;
const css3 = <SiCss3 />;
const node = <FaNode />;
const nextJS = <SiNextDotJs />;
const git = <SiGit />;
const nvim = <SiNeovim />;
const mysql = <SiMysql />;
const npm = <SiNpm />;
const jest = <SiJest />;
const bootstrap = <SiBootstrap />;
const tailwind = <SiTailwindcss />;

// Desired skill icons
const java = <SiJava />;
const python = <SiPython />;
const docker = <SiDocker />;
const webpack = <SiWebpack />;

const App: React.FC = () => {
  return (
    <>
      <Header
        title="Welcome"
        link1="About"
        link2="Works"
        link3="Skills"
        link4="Contact"
      />
      <About aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet sapien iaculis, congue lectus et, egestas orci. Nunc nisl metus, vulputate a eros id, laoreet auctor ante. Sed quis justo vitae diam facilisis finibus." />
      <Works />
      <Skills
        title1="Current skills"
        icon1={JS}
        icon2={TS}
        icon3={node}
        icon4={html5}
        icon5={css3}
        icon6={ReactIcon}
        icon7={nextJS}
        icon8={PHP}
        icon9={git}
        icon10={nvim}
        icon11={mysql}
        icon12={npm}
        icon13={jest}
        icon14={bootstrap}
        icon15={tailwind}
        title2="Desired skills"
        icon16={java}
        icon17={python}
        icon18={docker}
        icon19={webpack}
      />
      <Footer />
    </>
  );
};

export default App;
