import type { CardListSectionProps } from "../../../types/portfolio";
import Card from "../../card/Card";

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
