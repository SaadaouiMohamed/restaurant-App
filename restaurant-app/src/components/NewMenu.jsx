import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function NewMenu({ newMenu }) {
  return (
    <div className="text-center mt-10 p-4">
      <h1 className="text-3xl font-medium text-[#5f5e4e]">New in Menu</h1>
      <section className="grid grid-cols-4 gap-3 w-[80%] mx-auto my-20">
        {newMenu.map((elem, i) => (
          <article key={i} className="text-center bg-[#f6f7ea] p-5 pb-10">
            <img
              src={elem.strMealThumb}
              alt={elem.strMeal}
              className="w-[50%] rounded-full mx-auto mt-[-50px]"
            />
            <h2 className="my-5 text-[#9a5e50] text-2xl font-medium">
              {elem.strMeal}
            </h2>
            <p className="text-[#726a5e] leading-7">
              {elem.strInstructions.slice(0, 100)}
            </p>
            <div className="mt-10">
              <a href="#" className="text-[#726a5e]">
                More Info <HiArrowNarrowRight className="inline" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
