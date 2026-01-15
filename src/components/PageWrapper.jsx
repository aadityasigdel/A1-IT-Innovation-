import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (location !== displayLocation) {
      // Fade out
      setFadeOut(true);

      // Use requestAnimationFrame for instant rendering
      const rafId = requestAnimationFrame(() => {
        // Swap content while faded
        setDisplayLocation(location);
        
        // Fade back in immediately
        setTimeout(() => {
          setFadeOut(false);
        }, 10);
      });

      return () => cancelAnimationFrame(rafId);
    }
  }, [location, displayLocation]);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.15s ease-in-out",
        transitionProperty: "opacity",
        willChange: "opacity",
        backfaceVisibility: "hidden",
        perspective: 1000,
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
