import { useEffect, useState } from "react";
import type { AppRevealStage, SpotlightVarName, SpotlightVars } from "./types/app";
import "./App.css";
import IntroLoader from "./components/introLoader/IntroLoader";
import PortfolioLayout from "./components/portfolioLayout/PortfolioLayout";

const REVEAL_SEQUENCE_DURATION_MS = 3600;

function App() {
  const [revealStage, setRevealStage] = useState<AppRevealStage>("idle");

  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    const setSpotlightVar = (name: SpotlightVarName, value: string) => {
      root.style.setProperty(name, value);
    };

    const initialSpotlight: Partial<SpotlightVars> = {
      "--cursor-x": `${cursorX}px`,
      "--cursor-y": `${cursorY}px`,
      "--spotlight-opacity": "0",
    };
    setSpotlightVar("--cursor-x", initialSpotlight["--cursor-x"] ?? "0px");
    setSpotlightVar("--cursor-y", initialSpotlight["--cursor-y"] ?? "0px");
    setSpotlightVar(
      "--spotlight-opacity",
      initialSpotlight["--spotlight-opacity"] ?? "0",
    );

    const updateSpotlightPosition = () => {
      setSpotlightVar("--cursor-x", `${cursorX}px`);
      setSpotlightVar("--cursor-y", `${cursorY}px`);
      rafId = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      setSpotlightVar("--spotlight-opacity", "1");

      rafId ??= globalThis.requestAnimationFrame(updateSpotlightPosition);
    };

    const hideSpotlight = () => {
      setSpotlightVar("--spotlight-opacity", "0");
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

  useEffect(() => {
    if (revealStage !== "revealing") {
      return undefined;
    }

    const doneTimeoutId = globalThis.setTimeout(() => {
      setRevealStage("done");
    }, REVEAL_SEQUENCE_DURATION_MS);

    return () => {
      globalThis.clearTimeout(doneTimeoutId);
    };
  }, [revealStage]);

  const handleIntroComplete = () => {
    globalThis.requestAnimationFrame(() => {
      setRevealStage("revealing");
    });
  };

  const isRevealActive = revealStage !== "idle";

  return (
    <div
      className={`App-body App-body--staged${isRevealActive ? " App-body--reveal" : ""}`}
    >
      <IntroLoader onComplete={handleIntroComplete} />
      <PortfolioLayout />
    </div>
  );
}

export default App;
