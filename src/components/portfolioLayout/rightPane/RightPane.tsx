import "./RightPane.css";
import CardListSection from "../../portfolio/CardListSection";
import { experienceData } from "../../../data/experienceData";
import { projectData } from "../../../data/projectData";

function RightPane() {
  return (
    <section className="right-pane">
      <section id="about" className="right-pane__section">
        <p>
          I am a full stack developer with a passion for building beautiful,
          user-friendly applications. I enjoy understanding wider business
          requirements and translating those into technical solutions.
        </p>
      </section>

      <section id="experience" className="right-pane__section">
        <CardListSection items={experienceData} />
      </section>
      <section id="projects" className="right-pane__section">
        <CardListSection items={projectData} />
      </section>
    </section>
  );
}

export default RightPane;
