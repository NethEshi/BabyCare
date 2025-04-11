import React, { useState, useEffect } from "react";
import arrowImage from "../assets/upArrow.svg";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

return (
    <div className="scroll-to-top">
        {visible && (
            <button onClick={scrollToTop} title="Scroll to Top">
                <img src={arrowImage} alt="up-arrow" className="w-[42px] h-[42px]"/>
            </button>
        )}
    </div>
);
}

export default ScrollButton;