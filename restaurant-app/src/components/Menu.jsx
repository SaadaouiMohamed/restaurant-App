import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    async function getCategories() {
      axios.get("http://localhost:5050/categories").then((res) => {
        setCategorie(res.data);
      });
    }
    getCategories();
  }, []);

  return (
  <div className="grid grid-cols-4 gap-x-5 gap-y-5 p-4 mx-8">
    {
        categorie.map((el , i) => (
            <div className="text-center bg-gray-300" key={i}>
            <img src={el.strCategoryThumb} alt={el.strCategory} className="rounded-full"/>
            <p className="mt-3 py-3">{el.strCategory}</p>
            </div>
        ))
    }
  </div>
  )
}
