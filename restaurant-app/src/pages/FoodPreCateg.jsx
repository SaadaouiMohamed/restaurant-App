import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MdShoppingCart } from "react-icons/md";

export default function FoodPreCateg() {
  const { id } = useParams();

  const [food, setFood] = useState([]);

  const [reservation, setReservation] = useState([]);

  useEffect(() => {

    localStorage.getItem("reservation") && setReservation(JSON.parse(localStorage.getItem("reservation")));


    const getFoodPerCateg = () => {
      axios.get(`http://localhost:5050/meals?idCategory=${id}`).then((res) => {
        setFood(res.data);
      });
    };
    
    getFoodPerCateg();

  }, []);

  useEffect(() => {
    reservation.length &&
      localStorage.setItem("reservation", JSON.stringify(reservation));

  }, [reservation]);

  const addReservation = (id) => {
    const addReserv = food.filter(({ idMeal }) => idMeal === id);

    setReservation([...reservation, addReserv[0]]);
  };

  return (
    <div className="my-5 grid grid-cols-3 gap-3">
      {food.map((el, i) => (
        <Card sx={{ maxWidth: 345 }} className="w-[90%] mx-auto" key={i}>
          <CardMedia
            component="img"
            height="194"
            image={el.strMealThumb}
            alt={el.strMeal}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <div className="bg-green-500 p-5 w-[15%] rounded-tl-[10px] mx-auto float-right">
            <button onClick={() => addReservation(el.idMeal)}>
              <MdShoppingCart />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
