import LeftPane from "./leftPane/LeftPane";
import RightPane from "./rightPane/RightPane";
import "./PortfolioLayout.css";

function PortfolioLayout() {
  return (
    <main className="portfolio-layout">
      <LeftPane />
      <RightPane />
    </main>
  );
}

export default PortfolioLayout;
