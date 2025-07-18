import { useState, useEffect } from "react";

export const useScroll = (thresold = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > thresold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresold]);
  return isScrolled;
};
