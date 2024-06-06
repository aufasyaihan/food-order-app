import { useEffect, useState } from "react";

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
        <li className="meal-item" key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p className="meal-item-description">{meal.description}</p>
            <p className="meal-item-price">{meal.price}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
