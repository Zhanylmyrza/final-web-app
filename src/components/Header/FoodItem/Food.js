import styles from "./Food.module.css";
import { useState } from "react";
import bgImage from "../../../images/bgimage.jpg";
import React from "react";

const Food = () => {
  const [country, setCountry] = useState("");
  const [foodName, setFoodName] = useState("");
  const [recipe, setRecipe] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const [data, setData] = useState([]);

  const [isFormHidden, setIsFormHidden] = useState(true);

  const getData = () => {
    fetch("https://final-app-1df83-default-rtdb.firebaseio.com/food-list.json")
      .then((res) => res.json())
      .then((data) => {
        const newFood = [];
        for (const key in data) {
          console.log(data[key]);
          newFood.push(data[key]);
        }
        setData(newFood);
      });
  };
  const sendData = () => {
    const newfood = {
      country: country,
      foodName: foodName,
      recipe: recipe,
      cookingTime: cookingTime,
    };

    fetch(
      "https://final-app-1df83-default-rtdb.firebaseio.com/food-list.json",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newfood),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("Success", data))
      .catch((error) => console.error("Error:", error));
  };

  const toggleForm = () => {
    setIsFormHidden(!isFormHidden);
  };

  return (
    <div className={styles.try}>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
        className={styles.trySection}
      >
        <h2 className={styles.tryText}>
          Do you want to add your own dish? Let's try!
        </h2>

        <button className={styles.btn} onClick={toggleForm}>
          Try
        </button>
      </div>

      <div className={isFormHidden ? styles.hiddenForm : styles.form}>
        <label className={styles.inputText}>Country:</label>

        <input
          className={styles.inpOwn}
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <label className={styles.inputText}>Food Name:</label>
        <input
          className={styles.inpOwn}
          type="text"
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
        />

        <label className={styles.inputText}>Recipe: </label>
        <textarea
          className={styles.inpOwn}
          type="text"
          onChange={(e) => {
            setRecipe(e.target.value);
          }}
        />

        <label className={styles.inputText}>Сooking time: </label>
        <input
          className={styles.inpOwn}
          type="text"
          onChange={(e) => {
            setCookingTime(e.target.value);
          }}
        />

        <button className={styles.addbtn} onClick={sendData}>
          Creat Own Food
        </button>
        <button className={styles.addbtn} onClick={getData}>
          Get Data
        </button>
      </div>

      <div>
        {data.map((item) => (
          <div key={item.country}>
            <h1>{item.foodName}</h1>
            <p>{item.country}</p>
            <p>{item.recipe}</p>
            <p>{item.cookingTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
