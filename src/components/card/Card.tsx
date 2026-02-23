import "./Card.css";

export type CardProps = {
  period: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

function Card({ period, title, description, href, tags = [] }: Readonly<CardProps>) {
  const content = (
    <>
      <p className="portfolio-card__meta">{period}</p>
      <div className="portfolio-card__body">
        <h3 className="portfolio-card__title">
          <span>{title}</span>
          <span className="portfolio-card__arrow" aria-hidden="true">
            ↗
          </span>
        </h3>
        <p className="portfolio-card__description">{description}</p>
        {tags.length > 0 && (
          <ul className="portfolio-card__tags" aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className="portfolio-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a className="portfolio-card" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className="portfolio-card">{content}</article>;
}

export default Card;
