import MealItem from "./MealItem";
import useFetch from "../assets/hooks/useFetch";
import { useMemo } from "react";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  // const requestConfig = useMemo(() => ({}), []); // Another option u can use useMemo

  const {
    data: meals,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Data...</p>;
  }

  if(error){
    return <Error title="An Error Occured" message={error}/>
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
