import axios from "axios";
import React, { useEffect, useState } from "react";
import Recepe from "./Recepe";
export default function App() {
  const AppId = "0d83a788";
  const AppKey = "9562d69d2d8526bdeaa7089aa452d002";
  const [search, setsearch] = useState("");
  const [recepe, setrecepe] = useState([]);
  const [setuery, setsetuery] = useState("chicken");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${setuery}&app_id=${AppId}&app_key=${AppKey}`
      )
      .then((response) => {
        setrecepe(response.data.hits);
      });
  }, [setuery]);

  const onsubmi = () => {
    setsetuery(search);
    console.log(`setuery`, setuery);
  };

  return (
    <div className="container">
      <h1 className=" text-center text-success ">Recipe Search </h1>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6 row">
          <input
            className="form-control col-6  ml-5"
            onChange={(e) => setsearch(e.target.value.trim())}
            placeholder="search"
          ></input>
          <button className="btn btn-success ml-2" onClick={onsubmi}>
            search
          </button>
        </div>
      </div>
      <div className="row mt-5">
        {recepe.map((item) => (
          <Recepe
            Title={item.recipe.label}
            image={item.recipe.image}
            det={item.recipe.ingredients}
            // console.log(`item.recipe`, item.recipe.ingredients)
          />
        ))}
      </div>
    </div>
  );
}
