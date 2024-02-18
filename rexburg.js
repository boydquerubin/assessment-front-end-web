const restaurants = [
  "Fresco Kitchen and Grill",
  "Applebees",
  "Denny's",
  "Panda Express",
  "McDonalds",
  "Burger King",
  "Wendy's",
  "Taco Bell",
  "Domino's Pizza",
  "Red 8:Asian Cuisine and Sushi Bar",
  "Arby's",
  "Pizza Hut",
  "Red Rabbit Grill",
  "Subway",
  "Freddy's",
  "Del Taco",
  "JB's",
];

function getRandomRestaurant() {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  const randomRestaurant = restaurants[randomIndex];
  alert("Your random restaurant recommendation is: " + randomRestaurant);
}

const recommendationButton = document.getElementById("recommendationButton");
recommendationButton.addEventListener("click", getRandomRestaurant);
