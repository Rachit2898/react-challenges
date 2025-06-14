import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  ];
  const backHandker = () => {
    // if (currentIndex > 0) {
    //   setCurrentIndex((currentIndex) => currentIndex - 1);      issue with countinue counting interview question
    // } else {
    //   setCurrentIndex(images.length - 1);
    // }

    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  const nextHandker = () => {
    // if (currentIndex < images.length - 1) {
    //   setCurrentIndex((currentIndex) => currentIndex + 1);
    // } else {
    //   setCurrentIndex(0);
    // }

    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextHandker();
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="p-4 flex flex-row items-center justify-center gap-4">
      <button onClick={backHandker} className="border border-black p-2 rounded">
        Back
      </button>

      <div className="p-4 flex flex-col items-center gap-4">
        <img
          className="w-[400px] h-[400px] object-cover rounded-md"
          src={images[currentIndex]}
          alt="Wallpaper"
        />
        <div className="p-4 flex flex-row items-center gap-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-[20px] h-[20px] rounded-full mx-1 border border-black ${
                currentIndex === index ? "bg-white" : "bg-black"
              }`}
            />
          ))}
        </div>
      </div>
      <button onClick={nextHandker} className="border border-black p-2 rounded">
        Next
      </button>
    </div>
  );
}

export default App;
