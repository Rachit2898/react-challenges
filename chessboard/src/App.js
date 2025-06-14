import "./App.css";

function App() {
  const BlackBox = () => {
    return <div className="bg-black w-[50px] h-[50px] "></div>;
  };
  const WhiteBox = () => {
    return <div className="bg-white w-[50px] h-[50px] "></div>;
  };

  const Row = ({ rowIndex }) => {
    return (
      <div className="flex">
        {Array.from({ length: 8 }).map((_, colIndex) =>
          (rowIndex + colIndex) % 2 === 0 ? (
            <BlackBox key={colIndex} />
          ) : (
            <WhiteBox key={colIndex} />
          )
        )}
      </div>
    );
  };
  const Board = () => {
    return (
      <div className="inline-block border border-black">
        {Array.from({ length: 8 }).map((_, rowIndex) => (
          <Row key={rowIndex} rowIndex={rowIndex} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div>
        <Board />
      </div>
    </>
  );
}

export default App;
