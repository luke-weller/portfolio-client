import Card, { type CardProps } from "../card/Card";

type CardListSectionProps = {
  id: string;
  heading: string;
  items: CardProps[];
};

function CardListSection({ id, heading, items }: Readonly<CardListSectionProps>) {
  return (
    <section id={id} className="right-pane__section">
      <h2 className="right-pane__heading">{heading}</h2>
      <div className="card-list">
        {items.map((item) => (
          <Card key={`${item.period}-${item.title}`} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CardListSection;
