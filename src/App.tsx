import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Works from "./components/works/works";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import { FaNode } from "react-icons/fa";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
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
  SiGarmin,
  SiGithub,
} from "react-icons/si";

// Up arrow for btn
const up = <SiGarmin />;

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

// Footer icon
const ghub = <SiGithub />;

const App: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="9" sm="12">
          <Header
            title="Welcome"
            link1="About"
            link2="Works"
            link3="Skills"
            link4="Contact"
          />
          <About
            aboutText="Hi, my name is Lachlan. I have been studying web development for the last 10 months, I am an aspiring full stack developer who is currently enjoying Javascript in the form of Next.js and Express.js."
            aboutText2="My main goal is to work within the web application space as I find this to be interesting and challenging. I am also hoping in my spare time to go further with software development and learn languages such as Python and Java."
            aboutText3="My projects are below, starting with the most recent."
          />
          <Works />
          <ScrollToTop upArrow={up} />
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
          <Contact />
          <Footer footerLink1={ghub} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
