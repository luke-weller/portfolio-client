import { type MouseEvent, useEffect, useState } from "react";
import type {
  NavSection,
  PortfolioSectionId,
  SocialLink,
} from "../../../types/portfolio";
import "./LeftPane.css";

const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work Experience" },
] as const satisfies readonly NavSection[];

function isNavSectionId(value: string): value is PortfolioSectionId {
  return navSections.some((section) => section.id === value);
}

const socialLinks = [
  {
    platform: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wellerluke/",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146z"
        />
        <path
          style={{ fill: "var(--bg-primary)" }}
          d="M4.943 6.194H2.542V14h2.4V6.194zm.157-2.413c0-.807-.605-1.462-1.358-1.462S2.385 2.974 2.385 3.78c0 .806.605 1.461 1.357 1.461S5.1 4.587 5.1 3.78zM13.615 9.507c0-2.344-1.25-3.434-2.92-3.434a2.53 2.53 0 0 0-2.306 1.27h-.032V6.194H5.96c.031.761 0 7.806 0 7.806h2.4V9.64c0-.233.017-.466.086-.632.188-.465.617-.947 1.338-.947.944 0 1.322.715 1.322 1.763V14h2.4V9.507z"
        />
      </svg>
    ),
  },
  {
    platform: "github",
    name: "GitHub",
    href: "https://github.com/luke-weller",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.82 1.23 1.82 1.23 1.05 1.81 2.76 1.29 3.43.99.11-.77.41-1.29.74-1.58-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.42.37.8 1.1.8 2.22v3.28c0 .32.22.69.82.58A12 12 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    platform: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/lukedweller/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3z" />
      </svg>
    ),
  },
] as const satisfies readonly SocialLink[];

function LeftPane() {
  const [activeSection, setActiveSection] =
    useState<PortfolioSectionId>("about");

  useEffect(() => {
    const sections = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    const syncActiveSection = () => {
      const marker = globalThis.scrollY + 140;
      let nextActive: PortfolioSectionId = navSections[0].id;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + globalThis.scrollY;
        if (top <= marker && isNavSectionId(section.id)) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      setActiveSection(nextActive);
    };

    syncActiveSection();
    globalThis.addEventListener("scroll", syncActiveSection, { passive: true });
    globalThis.addEventListener("resize", syncActiveSection);

    return () => {
      globalThis.removeEventListener("scroll", syncActiveSection);
      globalThis.removeEventListener("resize", syncActiveSection);
    };
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: PortfolioSectionId,
  ) => {
    event.preventDefault();
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    globalThis.history.replaceState(
      null,
      "",
      `${globalThis.location.pathname}${globalThis.location.search}`,
    );
  };

  return (
    <aside className="left-pane">
      <div className="left-pane__content">
        <h1 className="left-pane__name">Luke Weller</h1>
        <h2 className="left-pane__title">Full Stack Developer</h2>
        <p className="left-pane__summary">
          Full-stack engineer who builds reliable products end to end, with a
          strong foundation in UX/UI.
        </p>

        <nav className="left-pane__nav" aria-label="Section navigation">
          {navSections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`left-pane__nav-link${isActive ? " left-pane__nav-link--active" : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => handleNavClick(event, id)}
              >
                <span className="left-pane__nav-label">{label}</span>
                <span className="left-pane__nav-dot" aria-hidden="true" />
              </a>
            );
          })}
        </nav>

        <ul className="left-pane__social-list" aria-label="Social links">
          {socialLinks.map(({ name, href, icon }) => (
            <li key={name}>
              <a
                className="left-pane__social-link"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default LeftPane;
