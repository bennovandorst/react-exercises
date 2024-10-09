import FlashCardList from "./components/FlashCardList";

const App = () => {
  return (
    <>
      <div className="bg-blue-200 text-blue-800 p-4 rounded-md mb-4">
        Deze vragen zijn gegenereerd door ChatGPT. De antwoorden zijn niet gegarandeerd correct.
      </div>
      <FlashCardList />
    </>
  );
}

export default App
