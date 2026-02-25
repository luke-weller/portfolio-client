import { useEffect, useState } from "react";
import type { IntroLoaderProps } from "../../types/app";
import "./IntroLoader.css";

function IntroLoader({ onComplete }: Readonly<IntroLoaderProps>) {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroExiting, setIsIntroExiting] = useState(false);

  useEffect(() => {
    const exitTimeoutId = globalThis.setTimeout(() => {
      setIsIntroExiting(true);
    }, 2500);

    const hideTimeoutId = globalThis.setTimeout(() => {
      setShowIntro(false);
      onComplete?.();
    }, 2950);

    return () => {
      globalThis.clearTimeout(exitTimeoutId);
      globalThis.clearTimeout(hideTimeoutId);
    };
  }, [onComplete]);

  if (!showIntro) {
    return null;
  }

  return (
    <div
      className={`App-intro${isIntroExiting ? " App-intro--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="intro-content">
        <div className="intro-body">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="intro-base">
            <span />
          </div>
          <div className="intro-face" />
        </div>
        <p className="intro-status">Jetpacking to my portfolio...</p>
      </div>
      <div className="intro-longfazers" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default IntroLoader;
