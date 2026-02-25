import "./RightPane.css";
import CardListSection from "./CardListSection";
import { experienceData } from "../../../data/experienceData";

function RightPane() {
  return (
    <section className="right-pane">
      <section
        id="about"
        className="right-pane__section right-pane__section--about"
      >
        <p>
          I am a full stack engineer focused on building thoughtful,
          user-friendly products with clean, reliable architecture. I enjoy
          working at the intersection of UX and engineering, where strong
          product thinking meets maintainable code and scalable systems.
        </p>
        <p>
          Currently, I build healthcare products at{" "}
          <a href="https://www.levrx.com/" target="_blank" rel="noreferrer">
            Levrx
          </a>{" "}
          in a backend-focused full stack role, delivering configurable workflow
          tooling, third-party/webhook integrations, and web/mobile interfaces
          that support insurance-aware medication journeys.
        </p>
        <p>
          Earlier in my career at{" "}
          <a
            href="https://www.netcompany.com/"
            target="_blank"
            rel="noreferrer"
          >
            Netcompany
          </a>
          , I worked across consulting, agency, and product teams, including
          leading end-to-end delivery as a freelance founder and contributing as
          a{" "}
          <a href="https://www.nngroup.com" target="_blank" rel="noreferrer">
            UX designer
          </a>{" "}
          before moving fully into engineering. Relocating from England to the
          United States also gave me a fresh perspective on adaptability,
          ownership, and building for real-world users.
        </p>
        <p>
          Outside of work, parenting is my passion and primary focus. Raising my
          twin daughters to be kind, curious, and confident is the most
          rewarding challenge I’ve ever taken on. I also enjoy traveling,
          experiencing new cultures, and playing the guitar.
        </p>
      </section>

      <section id="experience" className="right-pane__section">
        <CardListSection items={experienceData} />
      </section>

      <footer className="right-pane__footer">
        Created by yours truly with{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          Typescript
        </a>
        , custom{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          CSS
        </a>
        , with a little help from{" "}
        <a href="https://cursor.com/" target="_blank" rel="noreferrer">
          Cursor
        </a>{" "}
        and{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>
        . Notable mention to{" "}
        <a
          href="https://v4.brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
        >
          Brittany Chiang
        </a>{" "}
        for design inspriation and{" "}
        <a
          href="https://codepen.io/mr_alien/pen/NWygPw"
          target="_blank"
          rel="noreferrer"
        >
          Mr Alien
        </a>{" "}
        for the awesome loading animation.
      </footer>
    </section>
  );
}

export default RightPane;
