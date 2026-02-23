import Card, { type CardProps } from "../card/Card";

type CardListSectionProps = {
  items: CardProps[];
};

function CardListSection({ items }: Readonly<CardListSectionProps>) {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={`${item.period}-${item.title}`} {...item} />
      ))}
    </div>
  );
}

export default CardListSection;
