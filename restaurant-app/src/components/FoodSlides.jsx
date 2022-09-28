import React, { useEffect, useMemo, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useMeals } from "../context/MealsContext";

export default function FoodSlides() {
  const [current, setCurrent] = useState(0);

  const {Meals} = useMeals()

  const slides = useMemo(
    () => [...new Set(Meals.map(({ strMealThumb }) => strMealThumb))],
    [Meals]
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
  }, [Meals]);

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
