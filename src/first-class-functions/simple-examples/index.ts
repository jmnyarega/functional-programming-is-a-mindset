// HOC

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
const foods: any[] = [1, 2, 3, 4, 4, 3, 324234, 23423];
const dishes: any[] = [12312, 123, 123, 123, 12, 312, , 435, 4356];

const cook = (food: any) => console.log(food);
const eat = (food: any) => console.log(food);
const wash = (food: any) => console.log(food);
const dry = (food: any) => console.log(food);
const put_away = (food: any) => console.log(food);

const cook_and_eat = (item: any) => {
  cook(item);
  eat(item);
};

const clean = (item: any) => {
  wash(item);
  dry(item);
  put_away(item);
};

const foreach = (array: any[], f: (arg0: any) => void) => {
  for (let i = 0; i < array.length; i++) {
    f(array[i]);
  }
};

foreach(foods, cook_and_eat);
foreach(dishes, clean);
