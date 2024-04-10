import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../Card";
import { v4 as uuidv4 } from "uuid";

type ScrollableCardListProps = {
  cardData: Array<any>;
};

const ScrollableCardList = ({ cardData }: ScrollableCardListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const scrollHeight = containerRef.current.scrollHeight;
    const clientHeight = containerRef.current.clientHeight;

    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const newActiveIndex = Math.floor(scrollRatio * cardData.length);

    setActiveIndex(newActiveIndex);
  }, [cardData]);

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
      {cardData.map((card, index) => (
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
