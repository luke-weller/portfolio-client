import "./RightPane.css";
import CardListSection from "../../portfolio/CardListSection";
import { experienceData } from "../../../data/portfolio/experienceData";
import { projectData } from "../../../data/portfolio/projectData";

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

      <CardListSection id="experience" heading="Experience" items={experienceData} />
      <CardListSection id="projects" heading="Projects" items={projectData} />
    </section>
  );
}

export default RightPane;
