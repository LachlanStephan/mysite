import React, { useState } from "react";
import { IconBaseProps } from "react-icons";
import "./scrollToTop.css";

interface Props {
  upArrow: IconBaseProps;
}

const ScrollToTop: React.FC<Props> = ({ upArrow }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <button
      onClick={scrollTop}
      className="h-auto hover:text-pink-400 transition 0.5s"
      id="btn"
      style={{ display: showScroll ? "flex" : "none", fontSize: "1.5em" }}
    >
      {upArrow}
    </button>
  );
};
export default ScrollToTop;
