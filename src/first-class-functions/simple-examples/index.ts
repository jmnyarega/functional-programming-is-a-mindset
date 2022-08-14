// HOC

import { foreach } from "../../_internals/arrays/_foreach";

/*
 * initial code:
 *  for(var i = 0; i < foods.length; i++) {
 *      var food = foods[i];
 *      cook(food);
 *      eat(food);
 *  }
 *
 *  for(var i = 0; i < dishes.length; i++) {
 *      var dish = dishes[i];
 *      wash(dish);
 *      dry(dish);
 *      putAway(dish);
 *   }
 *
 */

// final code:
const foods: number[] = [1, 2, 3, 4, 4, 3, 324234, 23423];
const dishes: number[] = [12312, 123, 123, 123, 12, 312, 435, 4356];

const cook = <T>(food: T) => console.log(food);
const eat = <T>(food: T) => console.log(food);
const wash = <T>(food: T) => console.log(food);
const dry = <T>(food: T) => console.log(food);
const put_away = <T>(food: T) => console.log(food);

const cook_and_eat = <T>(item: T) => {
  cook(item);
  eat(item);
};

const clean = <T>(item: T) => {
  wash(item);
  dry(item);
  put_away(item);
};

foreach(foods, cook_and_eat);
foreach(dishes, clean);
