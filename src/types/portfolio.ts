import type { ReactNode } from "react";

export type ExternalLink = {
  href: string;
  label?: string;
};

export type PortfolioSectionId = "about" | "experience";
export type SocialPlatform = "linkedin" | "github" | "instagram";

export type NavSection = {
  id: PortfolioSectionId;
  label: string;
};

export type SocialLink = ExternalLink & {
  platform: SocialPlatform;
  name: string;
  icon: ReactNode;
};

export type TimelineEntry = {
  period: string;
  title: string;
  location?: string;
};

export type PortfolioCard = TimelineEntry & {
  description?: string;
  href?: string;
  tags?: string[];
};

export type CardListSectionProps = {
  items: PortfolioCard[];
};
