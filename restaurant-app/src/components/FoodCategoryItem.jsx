import React from "react";

export default function FoodCategoryItem({el}) {


  return (
   
      
      <div className="text-center bg-gray-100 rounded-[5px] p-4 shadow-2xl">
        <img
          src={el.strCategoryThumb}
          alt={el.strCategory}
          className="rounded-full max-w-[90%]"/>
        <p className="mt-3 py-3 font-bold">{el.strCategory}</p>
      </div>
    
  );
}
