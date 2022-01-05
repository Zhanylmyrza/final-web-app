import styles from "./Kitchens.module.css";
import { useState } from "react";

const kitchens = [
  "African",
  "American",
  "British",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const Kitchens = () => {
  const API_KEY = "0d63c18ec4da4a18bc50714dd2f99abc";

  const [foodsList, setFoodsList] = useState([]);

  const generateFood = (id, title, image, ingredients) => {
    const food = {
      id: id,
      title: title,
      image: image,
      ingredients: ingredients,
    };
    return food;
  };

  const chooseKitchen = (name) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}&fillIngredients=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.results;
        const foods = [];
        result.map((food) =>
          foods.push(
            generateFood(
              food.id,
              food.title,
              food.image,
              food.missedIngredients
            )
          )
        );
        setFoodsList(foods);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Choose kitchen:</h1>
      <div className={styles.container}>
        {kitchens.map((item) => (
          <h2
            onClick={() => chooseKitchen(item)}
            className={styles.item}
            key={item}
          >
            {item}
          </h2>
        ))}
      </div>
      <div className={styles.foodsContainer}>
        {foodsList.map((food) => (
          <div className={styles.food}>
            <h2>{food.title}</h2>

            <img src={food.image} />

            <ol>
              {food.ingredients.map((item) => (
                <li>
                  <img src={item.image} />
                  <p>{item.original}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchens;
