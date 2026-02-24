import { useEffect } from "react";
import "./App.css";
import IntroLoader from "./components/introLoader/IntroLoader";
import PortfolioLayout from "./components/portfolioLayout/PortfolioLayout";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    const updateSpotlightPosition = () => {
      root.style.setProperty("--cursor-x", `${cursorX}px`);
      root.style.setProperty("--cursor-y", `${cursorY}px`);
      rafId = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      root.style.setProperty("--spotlight-opacity", "1");

      rafId ??= globalThis.requestAnimationFrame(updateSpotlightPosition);
    };

    const hideSpotlight = () => {
      root.style.setProperty("--spotlight-opacity", "0");
    };

    globalThis.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    globalThis.addEventListener("mouseleave", hideSpotlight);
    globalThis.addEventListener("blur", hideSpotlight);

    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("mouseleave", hideSpotlight);
      globalThis.removeEventListener("blur", hideSpotlight);

      if (rafId !== null) {
        globalThis.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="App-body">
      <IntroLoader />
      <PortfolioLayout />
    </div>
  );
}

export default App;
