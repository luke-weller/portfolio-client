import "./ExperiencePage.css";
import { experienceData } from "../../data/experienceData";
import type { ExperienceTitleParts } from "../../types/experience";

const splitTitle = (title: string): ExperienceTitleParts => {
  const separator = " · ";
  const separatorIndex = title.indexOf(separator);

  if (separatorIndex === -1) {
    return { role: title, company: "Independent / Internal" };
  }

  return {
    role: title.slice(0, separatorIndex),
    company: title.slice(separatorIndex + separator.length),
  };
};

function ExperiencePage() {
  return (
    <main className="experience-page">
      <header className="experience-page__header">
        <h1>Experience Archive</h1>
        <a href="/" className="experience-page__back-link">
          Luke Weller
        </a>
      </header>

      <section className="experience-page__table-wrap">
        <table className="experience-page__table">
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Role</th>
              <th scope="col">Company</th>
              <th scope="col">Snapshot</th>
            </tr>
          </thead>
          <tbody>
            {experienceData.map((experience) => {
              const { role, company } = splitTitle(experience.title);

              return (
                <tr key={`${experience.period}-${experience.title}`}>
                  <td>{experience.period}</td>
                  <td>{role}</td>
                  <td>{company}</td>
                  <td>
                    {experience.description ?? experience.location ?? "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ExperiencePage;
