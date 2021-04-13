import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IconBaseProps } from "react-icons";

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
    <Button
      variant="light"
      onClick={scrollTop}
      className="scrollTop"
      id="btn"
      style={{ display: showScroll ? "flex" : "none", fontSize: "1.5em" }}
    >
      {upArrow}
    </Button>
  );
};
export default ScrollToTop;
