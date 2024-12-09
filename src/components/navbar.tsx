"use client";

import { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const images = [
    "/bgheader.png",
    "/shoppingpic.jpg",
    "/shoppinpic2.webp",
    "/shoppingpic3.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative flex justify-center items-center w-full h-[50vh] sm:h-[60vh] lg:h-[716px] bg-gray-200 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit={index === 3 ? "contain" : "cover"}
          className={`absolute transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 sm:pl-16 lg:pl-20 text-white bg-black bg-opacity-30">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-wider">
          NEW COLLECTION
        </h1>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <button className="mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-montserrat transition-all duration-300 ease-in-out shadow-lg">
          Shop Now
        </button>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 shadow-md hover:bg-green-500 transition-all duration-300 ease-in-out"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default Navbar;
