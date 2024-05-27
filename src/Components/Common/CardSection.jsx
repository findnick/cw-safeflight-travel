import ImageCard from "./ImageCard";

const CardSection = ({ cards }) => {
  return (
    <div className="flex flex-row px-14 flex-wrap my-20">
      {cards.map((card, i) => {
        return (
          <ImageCard
            key={i}
            heading={card.heading}
            text={card.text}
            img={card.img}
          />
        );
      })}
    </div>
  );
};

export default CardSection;
