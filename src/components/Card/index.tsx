import { Circular, Rectangular, SubTitle, Title } from "./placeholders";

type CardProps = {
  cardContainerStyles?: string;
  rectangleContainerStyles?: string;
  circleContainerStyles?: string;
  imageUrl?: string;
  avatarImageUrl?: string;
  titleText?: string;
  subTitleText?: string;
};

const Card = ({
  cardContainerStyles,
  rectangleContainerStyles,
  circleContainerStyles,
  imageUrl,
  avatarImageUrl,
  titleText,
  subTitleText,
}: CardProps) => {
  const cardStyles =
    cardContainerStyles ||
    "w-80 min-h-80 rounded-2xl shadow-4xl p-4 my-4 bg-gradient-to-br from-rose-500 to-rose-400";
  const rectangleStyles =
    rectangleContainerStyles ||
    "bg-gradient-to-br from-rose-400 to-[#db7483] w-[100%] h-36 rounded-2xl shadow-2xl";
  const circleStyles =
    circleContainerStyles ||
    "w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-300 shadow-md";

  return (
    <div className={cardStyles}>
      <Rectangular rectangleStyles={rectangleStyles} imageUrl={imageUrl} />
      <div className="flex items-center mt-5">
        <Circular circleStyles={circleStyles} avatarImageUrl={avatarImageUrl} />
        <div className="flex-grow ml-4">
          <Title titleText={titleText} />
          <SubTitle subTitleText={subTitleText} />
        </div>
      </div>
    </div>
  );
};

export default Card;
