import { useEffect, useRef, useState } from "react";

const useScrollFadeIn = (direction = "up", duration = 0.7, delay = 0) => {
  const [visible, setVisible] = useState(false);
  const [snapped, setSnapped] = useState(false); // transform 초기화 여부
  const dom = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(dom.current);
        }
      },
      { threshold: 0.2 }
    );

    if (dom.current) observer.observe(dom.current);

    return () => observer.disconnect();
  }, []);

  // transition 끝난 후 transform 완전히 제거
  useEffect(() => {
    const node = dom.current;
    if (!node) return;

    const handleEnd = () => {
      if (visible && !snapped) {
        node.style.transform = "none";
        node.style.willChange = "auto";
        setSnapped(true);
      }
    };

    node.addEventListener("transitionend", handleEnd);
    return () => node.removeEventListener("transitionend", handleEnd);
  }, [visible, snapped]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 50px, 0)";
      case "down":
        return "translate3d(0, -20px, 0)";
      case "left":
        return "translate3d(20px, 0, 0)";
      case "right":
        return "translate3d(-20px, 0, 0)";
      default:
        return;
    }
  };

  return {
    ref: dom,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translate3d(0,0,0)" : getTransform(),
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      willChange: "opacity, transform",
    },
  };
};

export default useScrollFadeIn;
