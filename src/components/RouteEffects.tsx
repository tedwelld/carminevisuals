import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteEffects = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[70] h-1 w-full">
      <div
        className={`h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-700 ${
          loading ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};

export default RouteEffects;
