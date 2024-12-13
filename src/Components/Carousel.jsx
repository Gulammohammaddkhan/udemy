import React, { useEffect, useState } from "react";
import photo1 from "../assets/images/Mid-pic.webp";
import photo2 from "../assets/images/second-photo.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  let picArr = [photo1, photo2];
  const [imgIndex, setImgIndex] = useState(0);

  function handleLeft() {
    if (imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  }

  function handleRight() {
    if (imgIndex < picArr.length - 1) {
      setImgIndex((prev) => prev + 1);
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${imgIndex * 100}%)` }}
        >
          <img src={picArr[0]} alt="photos" className="w-full" />
          <img src={picArr[1]} alt="photos" className="w-full" />
        </div>

        <div className="photo1">
          <h1>24-Hour Flash Sale</h1>
          <p>
            Learn valuable, practical skills for as low as ₹549. Sale ends
            tonight!
          </p>
          <button className="info">More Info</button>
        </div>
        <div className="photo1">
          <h1 className="h1">Skills that drive you forward</h1>
          <p>
            "Technology and the world of work change fast — with us, you’re
            faster. Get the skills to achieve goals and stay competitive."
          </p>
          <button className="info">View Plans...</button>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 absolute -translate-y-[100%] top-[50%] w-full">
        <button
          onClick={handleLeft}
          className="bg-white rounded-full p-2 hover:bg-black hover:text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleRight}
          className="bg-white rounded-full p-2 hover:bg-black hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
