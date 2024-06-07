import MealItem from "./MealItem";
import useFetch from "../assets/hooks/useFetch";
import { useMemo } from "react";

const requestConfig = {};

export default function Meals() {
  // const requestConfig = useMemo(() => ({}), []); // Another option u can use useMemo

  const {
    data: meals,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching Data...</p>;
  }

  console.log(meals);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
