import { useState, useEffect } from "react";
import "../App.css"; // Import Tailwind CSS

const images = [
  {
    src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with the actual path to your images
    alt: "Image 1",
    title: "Optimizing Revenue Cycle Management through superior medical billing services",
    subtitle: "Empowering your practices through innovative solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
    title: "Enhacing your practice with expert medical billing",
    subtitle: "Stay focused on patient care while we take care of your revenue cycle"
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
    title: "Simplifying medical billing complexities for you",
    subtitle: "Your trusted partner in revenue cycle management"
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
              <h2 className={`text-3xl font-bold mb-4 ${index === currentIndex ? "fade-in-up" : ""}`}>
                {image.title}
              </h2>
              <p className={`text-lg ${index === currentIndex ? "fade-in-up" : ""}`}>
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`px-4 py-2 text-black ${
              index === currentIndex ? "bg-white text-black " : "bg-transparent text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
