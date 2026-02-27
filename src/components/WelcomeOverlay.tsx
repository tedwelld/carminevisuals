import { useEffect, useState } from "react";

const WelcomeOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1700);
    const hideTimer = window.setTimeout(() => setVisible(false), 2600);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`welcome-overlay fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="glass-panel rounded-3xl px-10 py-8 md:px-16 md:py-12">
        <p className="welcome-text text-4xl md:text-6xl font-serif font-semibold tracking-wide text-foreground">
          Welcome
        </p>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
