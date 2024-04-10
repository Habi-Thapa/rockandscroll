import Card from "./components/Card";
import cardData from "./constants/cardData";
import { v4 as uuidv4 } from "uuid"; // Import v4 function from uuid package

function App({ bgColor }: { bgColor: any }) {
  return (
    <div className={`flex flex-col items-center h-screen ${bgColor}`}>
      {cardData.map((card) => (
        <Card
          key={uuidv4()}
          imageUrl={card.imageUrl}
          avatarImageUrl={card.avatarImageUrl}
          titleText={card.titleText}
          subTitleText={card.subTitleText}
        />
      ))}
    </div>
  );
}

export default App;
