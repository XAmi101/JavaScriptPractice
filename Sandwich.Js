//Given a sandwich  return an array of fillings inside the sandwich.

function getFillings(sandwich) {
  sandwich.shift();
  sandwich.pop();
  console.log(sandwich);
}

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]);
