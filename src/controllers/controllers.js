export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.renderRecipeModalItems(this.model.recipes);
    this.renderBackPackModalItems(this.model.backPackItems);
    this.renderNewRecipeOption(this.model.backPackItems);

    this.view.bindClickTargetItem(this.model.recipes);

    this.onRecipesChanged(this.model.recipes);
    this.view.bindAddNewRecipeBtn(this.handleAddNewRecipe);
  }

  renderRecipeModalItems = (recipes) => {
    this.view.createModalContent(recipes, this.view.recipeModalContainer);
  };
  renderBackPackModalItems = (item) => {
    this.view.createModalContent(item, this.view.backPackModalContainer);
  };
  renderNewRecipeOption(optionValue) {
    this.view.createNewItemOptions(this.model.backPackItems);
  }

  onRecipesChanged = (recipes) => {
    this.view.createModalContent(recipes, this.view.recipeModalContainer);
  };
  handleAddNewRecipe = (item) => {
    const res = this.model.addRecipe(item);
    this.onRecipesChanged(res);
  };
}
