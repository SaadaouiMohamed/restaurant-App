import React, { useEffect, useState } from "react";
import FoodSlides from "../components/FoodSlides";
import axios from "axios";

import NewMenu from "../components/NewMenu";
import MealsContextProvider from "../context/MealsContext";
export default function Home() {

  
  const [Meals, setMeals] = useState([]);

  const newMenu = Meals.slice(0, 4);

  useEffect(() => {
    getFoodImages();
    async function getFoodImages() {
      axios.get("http://localhost:5050/meals").then((res) => {
        setMeals(res.data);
      });
    }
  }, []);

  if (!Meals.length) return null;

  return (
    <MealsContextProvider value={{Meals , setMeals , newMenu}}>
    <div>
      <FoodSlides/>
      <NewMenu />
    </div>
    </MealsContextProvider>
  );
}
