import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transform-gpu transition"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
