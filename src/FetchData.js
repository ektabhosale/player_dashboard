import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from 'axios'
// import FetchData from "./Card";

const FetchData = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchUrl() {
    const res = await axios.get("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchUrl();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default FetchData;