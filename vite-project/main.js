import "./style.css";

// import greet from "./src/greeting";

// import { add, subtract, multiply, divide } from "./src/compute";

// import calculate from "./src/calculate";

// greet("Hello, World");
// console.log(add(2, 1));
// console.log(subtract(2, 1));
// console.log(multiply(2, 2));
// console.log(divide(25, 5));

// console.log(calculate(10, 5, "+"));
// console.log(calculate(10, 5, "-"));
// console.log(calculate(10, 5, "*"));
// console.log(calculate(10, 5, "/"));

import player from "./src/player";
import game from "./src/game";

const player1 = new player("AL", 100, 10);
const player2 = new player("Bob", 120, 8);

const game1 = new game(player1, player2);
game1.start();
