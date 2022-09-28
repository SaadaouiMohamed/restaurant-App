import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCategoryItem from "../components/FoodCategoryItem";

export default function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
    async function getCategories() {
      axios.get("http://localhost:5050/categories").then((res) => {
        setCategories(res.data);
      });
    }
    
  }, []);


  
  return (
  <div className="p-4 mx-8">
    <h1 className="text-center text-3xl my-5 ">Our Menu</h1>
    <ul className="grid grid-cols-4 gap-x-5 gap-y-5">
    {
        categories.map((el , i) => (
          <a href={`/categoryFood${el.idCategory}`}>
          <li key={i}>
          <FoodCategoryItem {...{el}}/>
          </li>
          </a>
        ))
    }
    </ul>
  </div>
  )
}
