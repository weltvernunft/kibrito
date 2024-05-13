import React, { useState, useEffect } from "react";

const Restaurants = () => {
  const host = "http://app.kibrito.com:8055/items/restaurants";
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(host, {
        mode: "no-cors",
      });
      const data = await response.json();
      setRestaurants(data.results);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);

  return (
    <div>
      <h1 className="font-bold">Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
