import { emitter } from "../EventEmitter/EventEmitter";
import { backPackItems } from "../mockData/backpack/backpack";
import recipeImage from "../images/recipe.jpg";

import { dataRecipe } from "../mockData/recipe/recipe";

export class Model {
  constructor() {
    const store = JSON.parse(localStorage.getItem("items"));
    this.recipes = store || dataRecipe;
    this.backPackItems = backPackItems;
  }
  addRecipe(item) {
    const { name, ingredients } = item;
    const recipe = {
      name,
      image: recipeImage,
      ingredients,
    };

    const itemNameExist = this.recipes.find((el) => el.name === name);

    if (itemNameExist) {
      alert("Рецепт с таким именем уже существует!");
      return this.recipes;
    }

    if (this.recipes.length < 20) {
      this.recipes.push(recipe);
      localStorage.setItem("items", JSON.stringify(this.recipes));
    } else {
      alert("Достигнуто максимальное количество рецептов!");
    }
    alert("Рецепт успешно создан!");
    return this.recipes;
  }
}
