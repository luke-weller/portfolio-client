export type AppRevealStage = "idle" | "revealing" | "done";

export type IntroLoaderProps = {
  onComplete?: () => void;
};

export type SpotlightVarName =
  | "--cursor-x"
  | "--cursor-y"
  | "--spotlight-opacity"
  | "--spotlight-size";

export type SpotlightVars = Record<SpotlightVarName, string>;
