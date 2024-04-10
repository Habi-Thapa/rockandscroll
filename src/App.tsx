import Card from "./components/Card";

function App({ bgColor }: { bgColor: any }) {
  return (
    <div className={`flex flex-col items-center h-screen ${bgColor}`}>
      <Card />
    </div>
  );
}

export default App;
