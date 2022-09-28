import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function FoodPreCateg() {
  const { id } = useParams();

  const [food, setFood] = useState([]);

  useEffect(() => {
    getFoodPerCateg();
    function getFoodPerCateg() {
      axios.get(`http://localhost:5050/meals?idCategory=${id}`).then((res) => {
        console.log(res.data);
        setFood(res.data);
      });
    }
  }, []);

  return (
    <div className="my-5 grid grid-cols-3 gap-3">
      {food.map((el, i) => (
        <Card sx={{ maxWidth: 345 }} className ='w-[90%] mx-auto'>
          <CardMedia
        component="img"
        height="194"
        image={el.strMealThumb}
        alt={el.strMeal}
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
        </Card>
      ))}
    </div>
  );
}
