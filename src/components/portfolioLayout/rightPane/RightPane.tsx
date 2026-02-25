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
          I’m a full stack engineer who loves building thoughtful products that
          feel good to use and stay reliable behind the scenes. I do my best
          work where UX and engineering overlap, turning messy real-world
          problems into clean, practical experiences.
        </p>
        <p>
          Right now, I build healthcare products at{" "}
          <a href="https://www.levrx.com/" target="_blank" rel="noreferrer">
            Levrx
          </a>{" "}
          in a backend-focused full stack role. That means configurable workflow
          tooling, third-party/webhook integrations, and web/mobile interfaces
          that help people navigate complex, insurance-aware medication journeys
          with less friction.
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
          , I worked across consulting, agency, and product teams. I’ve also
          led end-to-end delivery as a freelance founder and worked as a{" "}
          <a href="https://www.nngroup.com" target="_blank" rel="noreferrer">
            UX designer
          </a>{" "}
          before moving fully into engineering. Relocating from England to the
          U.S. gave me an even stronger respect for adaptability, ownership, and
          designing for real people, not ideal scenarios.
        </p>
        <p>
          Outside work, parenting is my favorite role. Raising twin daughters to
          be kind, curious, and confident is the most rewarding challenge I’ve
          taken on. I also love traveling, discovering new cultures, and picking
          up the guitar whenever I can.
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
