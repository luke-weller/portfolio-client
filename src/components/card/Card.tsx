import "./Card.css";

export type CardProps = {
  period: string;
  title: string;
  location?: string;
  description?: string;
  href?: string;
  tags?: string[];
};

function Card({
  period,
  title,
  location,
  description,
  href,
  tags = [],
}: Readonly<CardProps>) {
  const isInteractive = Boolean(href);
  const cardClassName = `portfolio-card${isInteractive ? "" : " portfolio-card--inactive"}`;
  const titleParts = title.trim().split(/\s+/);
  const trailingWord = titleParts.pop() ?? "";
  const titlePrefix = titleParts.join(" ");

  const content = (
    <>
      <p className="portfolio-card__meta">{period}</p>
      <div className="portfolio-card__body">
        <h3 className="portfolio-card__title">
          {titlePrefix ? <span>{`${titlePrefix} `}</span> : null}
          <span className="portfolio-card__title-tail">
            <span>{trailingWord}</span>
            {isInteractive && (
              <span className="portfolio-card__arrow" aria-hidden="true">
                ↗
              </span>
            )}
          </span>
        </h3>
        {location && <p className="portfolio-card__location">{location}</p>}
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

  if (isInteractive) {
    return (
      <a className={cardClassName} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}

export default Card;
