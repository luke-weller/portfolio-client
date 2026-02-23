import { useEffect, useState } from "react";
import "./LeftPane.css";

const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work Experience" },
] as const;

function LeftPane() {
  const [activeSection, setActiveSection] =
    useState<(typeof navSections)[number]["id"]>("about");

  useEffect(() => {
    const sections = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    const syncActiveSection = () => {
      const marker = globalThis.scrollY + 140;
      let nextActive: (typeof navSections)[number]["id"] = navSections[0].id;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + globalThis.scrollY;
        if (top <= marker) {
          nextActive = section.id as (typeof navSections)[number]["id"];
        } else {
          break;
        }
      }

      setActiveSection(nextActive);
    };

    syncActiveSection();
    globalThis.addEventListener("scroll", syncActiveSection, { passive: true });
    globalThis.addEventListener("resize", syncActiveSection);
    globalThis.addEventListener("hashchange", syncActiveSection);

    return () => {
      globalThis.removeEventListener("scroll", syncActiveSection);
      globalThis.removeEventListener("resize", syncActiveSection);
      globalThis.removeEventListener("hashchange", syncActiveSection);
    };
  }, []);

  return (
    <aside className="left-pane">
      <div className="left-pane__content">
        <h1 className="left-pane__name">Luke Weller</h1>
        <h2 className="left-pane__role">Full Stack Developer</h2>
        <p className="left-pane__role">
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
                onClick={() => setActiveSection(id)}
              >
                <span className="left-pane__nav-label">{label}</span>
                <span className="left-pane__nav-dot" aria-hidden="true" />
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default LeftPane;
