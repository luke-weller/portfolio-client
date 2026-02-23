import "./LeftPane.css";

function LeftPane() {
  return (
    <aside className="left-pane">
      <div className="left-pane__content">
        <h1 className="left-pane__name">Luke Weller</h1>
        <p className="left-pane__role">Full Stack Developer</p>

        <nav className="left-pane__nav" aria-label="Section navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </aside>
  );
}

export default LeftPane;
