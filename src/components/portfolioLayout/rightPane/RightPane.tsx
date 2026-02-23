import "./RightPane.css";
import CardListSection from "../../portfolio/CardListSection";
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
          Currently, I build healthcare products at Levrx in a backend-focused
          full stack role, delivering configurable workflow tooling,
          third-party/webhook integrations, and web/mobile interfaces that
          support insurance-aware medication journeys.
        </p>
        <p>
          Earlier in my career, I worked across consulting, agency, and product
          teams, including leading end-to-end delivery as a freelance founder
          and contributing as a UX/UI designer before moving fully into
          engineering. Relocating from England to the United States also gave me
          a fresh perspective on adaptability, ownership, and building for
          real-world users.
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
    </section>
  );
}

export default RightPane;
