import { useEffect, useState } from "react";
import type {
  AppRevealStage,
  SpotlightVarName,
  SpotlightVars,
} from "./types/app";
import "./App.css";
import IntroLoader from "./components/introLoader/IntroLoader";
import PortfolioLayout from "./components/portfolioLayout/PortfolioLayout";
import ExperiencePage from "./components/experiencePage/ExperiencePage";

const REVEAL_SEQUENCE_DURATION_MS = 3600;
const INTRO_SEEN_STORAGE_KEY = "portfolio-intro-seen";

const getHasSeenIntro = () => {
  try {
    return globalThis.sessionStorage.getItem(INTRO_SEEN_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const isReloadNavigation = () => {
  const navigationEntries =
    globalThis.performance.getEntriesByType("navigation");
  const navigationEntry = navigationEntries[0] as
    | PerformanceNavigationTiming
    | undefined;
  return navigationEntry?.type === "reload";
};

const markIntroSeen = () => {
  try {
    globalThis.sessionStorage.setItem(INTRO_SEEN_STORAGE_KEY, "1");
  } catch {
    // Ignore storage access failures and keep default behavior.
  }
};

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isExperienceArchiveRoute = currentPath === "/experience";
  const [shouldRunIntro] = useState(
    () => isReloadNavigation() || !getHasSeenIntro(),
  );

  const [revealStage, setRevealStage] = useState<AppRevealStage>(
    shouldRunIntro ? "idle" : "done",
  );

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
    if (isExperienceArchiveRoute) {
      markIntroSeen();
    }
  }, [isExperienceArchiveRoute]);

  useEffect(() => {
    if (isExperienceArchiveRoute) {
      return undefined;
    }

    if (revealStage !== "revealing") {
      return undefined;
    }

    const doneTimeoutId = globalThis.setTimeout(() => {
      setRevealStage("done");
    }, REVEAL_SEQUENCE_DURATION_MS);

    return () => {
      globalThis.clearTimeout(doneTimeoutId);
    };
  }, [isExperienceArchiveRoute, revealStage]);

  const handleIntroComplete = () => {
    markIntroSeen();

    globalThis.requestAnimationFrame(() => {
      setRevealStage("revealing");
    });
  };

  if (isExperienceArchiveRoute) {
    return (
      <div className="App-body">
        <ExperiencePage />
      </div>
    );
  }

  const isRevealAnimationEnabled = shouldRunIntro;
  const isRevealActive = isRevealAnimationEnabled && revealStage !== "idle";

  return (
    <div
      className={`App-body${isRevealAnimationEnabled ? " App-body--staged" : ""}${isRevealActive ? " App-body--reveal" : ""}`}
    >
      {shouldRunIntro && <IntroLoader onComplete={handleIntroComplete} />}
      <PortfolioLayout />
    </div>
  );
}

export default App;
