import React from "react";

export default function FoodCategoryItem() {
  return (
    <div>
      <h1>Our Menu</h1>
      <div className="text-center bg-gray-300" key={i}>
        <img
          src={el.strCategoryThumb}
          alt={el.strCategory}
          className="rounded-full"
        />
        <p className="mt-3 py-3">{el.strCategory}</p>
      </div>
    </div>
  );
}
