import React, { useEffect, useState } from "react";
import FoodSlides from "../components/FoodSlides";
import axios from "axios";

import NewMenu from "../components/NewMenu";
export default function Home() {
  const [meals, setMeals] = useState([]);

  const newMenu = meals.slice(0, 4);

  useEffect(() => {
    getFoodImages();
    async function getFoodImages() {
      axios.get("http://localhost:5050/meals").then((res) => {
        setMeals(res.data);
      });
    }
  }, []);

  if (!meals.length) return null;

  return (
    <div>
      <FoodSlides {...{ meals }} />
      <NewMenu {...{newMenu}}/>
    </div>
  );
}
