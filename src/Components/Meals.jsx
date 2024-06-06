import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        setMeals(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMeals();
  }, []);

  console.log(meals);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
