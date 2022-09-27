import React, { useEffect, useMemo, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export default function FoodSlides({ meals }) {
  const [current, setCurrent] = useState(0);

  const slides = useMemo(
    () => [...new Set(meals.map(({ strMealThumb }) => strMealThumb))],
    [meals]
  );

  const size = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => {
      const next = prev + 1;
      return next < size ? next : 0;
    });
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      const previous = prev - 1;
      return previous <= 0 ? size.length - 1 : previous;
    });
  };

  useEffect(() => {
    const internval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(internval);
    };
  }, [meals]);

  return (
    <div className="mt-10 w-[90%] mx-auto ">
      {slides.map((el, i) => (
        <div className={i === current ? "slide active" : "slide"} key={i}>
          <FaRegArrowAltCircleLeft
            className="left-3 btnSlide hover:translate-x-2"
            onClick={prevSlide}
          />
          <FaRegArrowAltCircleRight
            className="right-3 btnSlide hover:-translate-x-2"
            onClick={nextSlide}
          />
          <img src={el} alt="Meals Images" className="image" />
        </div>
      ))}
    </div>
  );
}
