import { emitter } from "../EventEmitter/EventEmitter";
const backPackImage = "./images/backPack.png";
const recipeImage = "./images/recipe.jpg";

export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.body = this.getElement("body");
    this.backPackModal = this.createModal(
      "backPackModal__wrapp",
      "backPackModal",
      "backPackModal__btn",
      "backPackModal__text",
      "Предметы",
      "backPackModal__img",
      backPackImage,
    );

    this.recipeModal = this.createModal(
      "recipeModal__wrapp",
      "recipeModal",
      "recipeModal__btn",
      "recipeModal__text",
      "Рецепты",
      "recipeModal__img",
      recipeImage,
    );

    this.formAddNewRecipe = this.createFormAddNewRecipe();

    this.deskWrapper = this.createElement("div", "deskWrapp");
    this.desk = this.createDesk();
    this.deskWrapper.append(this.desk);

    this.app.append(this.backPackModal, this.deskWrapper, this.recipeModal, this.formAddNewRecipe);

    this.recipeModalContainer = document.querySelector(".recipeModal");
    this.backPackModalContainer = document.querySelector(".backPackModal");

    this.select = document.querySelector(".select");
    this.newRecipeSaveBtn = this.getElement(".newRecipeSave");
    this.input = this.getElement(".input");
    this.ingredients = this.getElement(".ingredients");
    this.form = this.getElement(".form");

    this.modalCloseBtns = [
      this.getElement(".backPackModal__btn"),
      this.getElement(".recipeModal__btn"),
      this.getElement(".form__btn"),
    ];
    this.modals = [this.getElement(".backPackModal"), this.getElement(".recipeModal"), this.getElement(".form")];

    this.craftZone = this.getElement(".craft__wrapp");

    this.newRecipe = {
      name: "",
      ingredients: [],
    };

    this.targetItem = "";

    emitter.subscribe("clickOnTargettem", [
      this.createCraftCells,
      this.createCurrentIteImage,
      this.showDeskCraftListeners,
    ]);
    emitter.subscribe("addListenerDragItems", [this.bindDragActionDragItem, this.bindDragActionDragZone]);
    emitter.subscribe("createNodeIngredientItem", [this.createNodeIngredientItem]);

    this.bindCreateNodeItem();
    this.bindCraft();
    this.bindDeleteItem();
    this.bindtoggleModals();
  }
  createElement(tag, className) {
    this.ele = document.createElement(tag);
    if (className) this.ele.className = className;
    return this.ele;
  }
  getElement(selector) {
    return document.querySelector(selector);
  }
  createCraftCells = (targetItem) => {
    this.craftContainer = document.querySelector(".craft__wrapp");
    this.craftContainer.innerHTML = "";

    targetItem.ingredients.forEach((item) => {
      const craftCell = this.createElement("img");
      const imageUrl = `./images/item/${item}.jpg`;

      craftCell.className = "dragZoneCell";
      craftCell.setAttribute("data-zone", item);
      craftCell.src = imageUrl;

      this.craftContainer.append(craftCell);
    });
  };
  createCurrentIteImage = (item) => {
    const image = this.createElement("img");
    const text = this.createElement("div", "currentItem__describe");
    const { itemImageUrl, itemName } = item;
    const currentItem = document.querySelector(".currentItem");

    currentItem.innerHTML = "";

    text.innerText = itemName;
    image.src = itemImageUrl;

    currentItem.append(image, text);
  };
  createModal(wrapClass, modalClass, btnClass, textClass, textDescription, imgClass, image) {
    const wrapp = this.createElement("div", wrapClass);
    const modal = this.createElement("div", modalClass);
    const btn = this.createElement("button", btnClass);
    const text = this.createElement("div", textClass);
    const img = this.createElement("img", imgClass);

    text.innerText = textDescription;
    img.src = image;

    btn.append(text, img);
    wrapp.append(btn, modal);

    return wrapp;
  }
  createModalContent(array, node) {
    const className = node.classList.value;
    let imgClass = "";
    if (className === "recipeModal") imgClass = "recipeModal__image";
    if (className === "backPackModal") imgClass = "backPack__image";

    node.innerHTML = "";

    array.forEach((el, index) => {
      const image = this.createElement("img", `img__item ${imgClass}`);
      image.setAttribute("draggable", "true");
      image.setAttribute("data-item", index);
      image.setAttribute("name", el.name);
      image.src = el.image;

      return node.appendChild(image);
    });
  }
  createDesk() {
    const desk = this.createElement("div", "desk");
    const currentItem = this.createCurrentItem();
    const progressBar = this.createProgressBar();
    const craftBtn = this.createCraftBtn();
    const validate = this.createValidateText();
    const dataZone = this.createDataZone();

    desk.append(currentItem, progressBar, craftBtn, validate, dataZone);

    return desk;
  }
  createCurrentItem() {
    const item = this.createElement("div", "currentItem");
    const img = this.createElement("img", "currentItem__img");
    const text = this.createElement("div", "currentItem__text");

    text.innerText = "Выберите рецепт!";

    item.append(text, img);

    return item;
  }
  createProgressBar() {
    const wrapp = this.createElement("div", "progressBar__wrapp");
    const progressBar = this.createElement("div", "progressBar");
    const fill = this.createElement("div", "progressBar__fill");
    const pointer = this.createElement("div", "progressBar__pointer");
    const persent = this.createPercentProgress();

    progressBar.append(fill, pointer);
    wrapp.append(progressBar, persent);

    return wrapp;
  }
  createCraftBtn() {
    const btn = this.createElement("button", "craftBtn");

    btn.innerText = "Заполнить";

    return btn;
  }
  createValidateText() {
    const validate = this.createElement("div", "validateText");
    validate.innerText = "Заполните ячейки соответствующими предметами";

    return validate;
  }
  createDataZone() {
    const wrapp = this.createElement("div", "craft__wrapp");

    return wrapp;
  }
  createPercentProgress() {
    const item = this.createElement("div", "percentProgress");
    item.innerText = "0%";

    return item;
  }
  createFormAddNewRecipe() {
    const formWrapper = this.createElement("div", "form__wrapper");
    const titleWrapper = this.createElement("div", "form__btn");
    const image = this.createElement("img", "form__image");
    const title = this.createElement("div", "title");
    const form = this.createElement("div", "form");
    const formLabel = this.createElement("div", "form__label");
    const recipeName = this.createElement("div", "newRecipeName");
    const input = this.createElement("input", "input");
    const ingredients = this.createElement("div", "ingredients");
    const ingredientsText = this.createElement("div", "ingredients__text");
    const select = this.createElement("select", "select");
    const saveBtn = this.createElement("button", "newRecipeSave");

    title.innerText = "Создать рецепт";
    recipeName.innerText = "Придумайте название для нового рецепта";
    input.placeholder = "Название рецепта";
    ingredientsText.innerText = "Выберите необходимы предметы для рецепта";
    saveBtn.innerText = "Сохранить";
    image.src = recipeImage;
    select.size = 6;

    formLabel.append(recipeName, input);
    titleWrapper.append(image, title);
    form.append(formLabel, recipeName, input, ingredients, ingredientsText, select, saveBtn);
    formWrapper.append(titleWrapper, form);

    return formWrapper;
  }
  createNewItemOptions(items) {
    items.forEach((optionValue) => {
      const item = document.createElement("option");
      const itemName = optionValue.name;

      item.className = "option";
      item.innerText = itemName;
      item.value = itemName;

      this.select.append(item);
    });
  }
  validateCraftStatus() {
    this.dragZoneCells = document.querySelectorAll(".dragZoneCell");

    let allIngredients = true;

    if (this.dragZoneCells.length < 1) allIngredients = false;

    this.dragZoneCells.forEach((el) => {
      if (!el.getAttribute("successItem")) {
        allIngredients = false;
      }
    });

    return allIngredients;
  }
  showDeskCraftListeners = () => {
    const text = this.getElement(".validateText");
    const btn = this.getElement(".craftBtn");
    const progressBar = this.getElement(".progressBar__wrapp");

    [text, btn, progressBar].forEach((el) => (el.style.opacity = 1));
  };
  reloadCraft = () => {
    alert(`Предмет ${this.targetItem} успешно создан!`);
    this.deskWrapper.innerHTML = "";
    const newDesk = this.createDesk();
    this.deskWrapper.append(newDesk);
  };
  fillInProgress = () => {
    const isValidate = this.validateCraftStatus();

    const progressBarWidth = this.getElement(".progressBar").clientWidth;
    const progressBarFILL = this.getElement(".progressBar__fill");
    const percentProgress = this.getElement(".percentProgress");
    const pointer = this.getElement(".progressBar__pointer").clientWidth;

    const position = 10;
    const speed = 50;

    // eslint-disable-next-line consistent-return
    const addWidth = () => {
      if (progressBarFILL.clientWidth >= progressBarWidth - pointer) {
        return this.reloadCraft();
      }

      progressBarFILL.style.width = `${progressBarFILL.clientWidth + position}px`;
      percentProgress.innerText = `${Math.ceil((progressBarFILL.clientWidth / (progressBarWidth - pointer)) * 100)}%`;
      setTimeout(addWidth, speed);
    };

    if (isValidate) {
      addWidth();
    }
  };
  resetForm = () => {
    this.input.value = "";
    this.ingredients.innerHTML = "";
    this.newRecipe.name = "";
    this.newRecipe.ingredients = [];
  };
  validateNewItem = () => {
    const inputSize = this.input.value.trim().length;

    if (inputSize > 10) {
      alert("Допустимое число букв в рецепте - 10!");
      return false;
    }
    if (inputSize < 1) {
      alert("Введите название рецепта!");
      return false;
    }
    if (this.newRecipe.ingredients.length < 1) {
      alert("Выберите хотя бы один предмет для крафта рецепта!");
      return false;
    }
    return true;
  };
  createNewItem() {
    const LIMITCOUNT = 4;

    if (this.newRecipe.ingredients.length < LIMITCOUNT) {
      const element = this.value;
      this.newRecipe.ingredients.push(element);
      this.createNodeItems(element);
    } else {
      alert("Рецепт может содержать не более четырех предметов!");
    }
  }
  createNodeIngredientItem = (element) => {
    const newItem = document.createElement("div");
    const text = document.createElement("div");
    const button = document.createElement("img");

    button.className = "newItemButton";
    button.src = "./images/close.png";
    newItem.className = "newItemIngredients";
    button.setAttribute("name", element);
    text.innerText = element;
    newItem.append(text, button);

    this.ingredients.append(newItem);
  };
  handlerDragStart(e) {
    e.dataTransfer.setData("dragItem", this.dataset.item);
  }
  handlerDragEnter(e) {
    e.preventDefault();
  }

  handleDragOver(e) {
    e.preventDefault();
  }
  handleDragDrop(e) {
    const dragFlag = e.dataTransfer.getData("dragItem");
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
    const conformityDragItem = dragItem.getAttribute("name") === this.getAttribute("data-zone");

    if (conformityDragItem) {
      this.setAttribute("successItem", true);
      this.style.filter = "grayscale(0)";
      this.style.opacity = 1;
    } else {
      alert("Предмет не подходит!");
    }
  }
  bindDeleteItem = (e) => {
    this.body.addEventListener("click", (e) => {
      const className = e.target.classList.value;
      const itemClassName = "newItemButton";

      if (className === itemClassName) {
        const removeItem = e.target.getAttribute("name");
        const removeItemIndex = this.newRecipe.ingredients.indexOf(removeItem);
        e.target.parentElement.remove();
        this.newRecipe.ingredients = this.newRecipe.ingredients.filter((_, index) => index !== removeItemIndex);
      }
    });
  };
  bindValidateNewRecipeNameExist(recipes) {
    const recipeName = this.newRecipe.name;
    return recipes.filter((el) => el === recipeName).length;
  }
  bindAddNewRecipeBtn(handler) {
    this.body.addEventListener("click", (e) => {
      const targetItemClass = e.target.classList.value;
      const itemClass = "newRecipeSave";

      if (targetItemClass === itemClass) {
        const isValidate = this.validateNewItem();

        if (isValidate) {
          const inputText = this.input.value;
          this.newRecipe.name = inputText;
          handler(this.newRecipe);
          this.resetForm();
        }
      }
    });
  }
  bindCraft() {
    this.body.addEventListener("click", (e) => {
      const className = e.target.classList.value;
      const craftBtnClass = "craftBtn";

      if (className === craftBtnClass) {
        const isValidateStatus = this.validateCraftStatus();
        const text = this.getElement(".validateText");

        if (isValidateStatus) {
          text.innerText = "Крафтим!";
          text.style.color = "green";
        } else {
          text.innerText = "Заполните ячейки соответствующими предметами";
          text.style.color = "red";
        }
      }

      this.fillInProgress();
    });
  }
  bindCreateNodeItem() {
    this.body.addEventListener("click", (e) => {
      const targetClass = e.target.classList.value;
      const optionClass = "option";
      const LIMITCOUNT = 4;
      const newRecipeIngredientsCount = this.newRecipe.ingredients.length;

      if (e.target.classList.value === optionClass) {
        if (newRecipeIngredientsCount < LIMITCOUNT) {
          const item = e.target.value;
          this.newRecipe.ingredients.push(item);

          emitter.emit("createNodeIngredientItem", [item]);
        } else {
          alert("Рецепт может содержать не более четырех предметов!");
        }
      }
    });
  }
  bindtoggleModals() {
    this.modals.forEach((modal, index) => {
      this.modalCloseBtns[index].addEventListener("click", () => {
        modal.classList.toggle("hide");
      });
    });
  }
  bindDragActionDragZone = () => {
    const dragZoneCells = document.querySelectorAll(".dragZoneCell");

    dragZoneCells.forEach((el) => {
      el.addEventListener("dragenter", this.handlerDragEnter);
      el.addEventListener("dragleave", this.handleDragLeave);
      el.addEventListener("dragover", this.handleDragOver);
      el.addEventListener("drop", this.handleDragDrop);
    });
  };
  bindDragActionDragItem = () => {
    const items = document.querySelectorAll(".img__item.backPack__image");

    items.forEach((el) => {
      el.addEventListener("dragstart", this.handlerDragStart);
      el.addEventListener("dragend", this.handleDragEnd);
    });
  };
  bindClickTargetItem(recipes) {
    this.body.addEventListener("click", (e) => {
      const className = "img__item recipeModal__image";

      if (e.target.classList.value === className) {
        const targetItem = e.target.getAttribute("name");
        const itemInData = recipes.filter((el) => el.name === targetItem)[0];
        const itemImageUrl = itemInData.image;
        const itemName = itemInData.name;
        const item = {
          itemImageUrl,
          itemName,
        };
        this.targetItem = targetItem;
        emitter.emit("clickOnTargettem", [itemInData, item]);
        emitter.emit("addListenerDragItems", []);
      }
    });
  }
}
