import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import demoCardData from "./constants/cardData";
import Card from "./components/Card";

const ScrollableCardList = ({
  cardData: propCardData,
}: {
  cardData?: Array<any>;
}) => {
  const data = propCardData || demoCardData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const scrollHeight = containerRef.current.scrollHeight;
    const clientHeight = containerRef.current.clientHeight;

    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const newActiveIndex = Math.floor(scrollRatio * data.length);

    setActiveIndex(newActiveIndex);
  }, [data]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (!containerRef.current) return;
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center h-screen overflow-auto"
      style={{ scrollBehavior: "smooth" }}
    >
      {data.map((card, index) => (
        <Card
          key={uuidv4()}
          imageUrl={card.imageUrl}
          avatarImageUrl={card.avatarImageUrl}
          titleText={card.titleText}
          subTitleText={card.subTitleText}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

export default ScrollableCardList;
