var f=Object.defineProperty;var b=(m,e,t)=>e in m?f(m,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[e]=t;var c=(m,e,t)=>(b(m,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class v{constructor(e,t){c(this,"renderRecipeModalItems",e=>{this.view.createModalContent(e,this.view.recipeModalContainer)});c(this,"renderBackPackModalItems",e=>{this.view.createModalContent(e,this.view.backPackModalContainer)});c(this,"onRecipesChanged",e=>{this.view.createModalContent(e,this.view.recipeModalContainer)});c(this,"handleAddNewRecipe",e=>{const t=this.model.addRecipe(e);this.onRecipesChanged(t)});this.model=e,this.view=t,this.renderRecipeModalItems(this.model.recipes),this.renderBackPackModalItems(this.model.backPackItems),this.renderNewRecipeOption(this.model.backPackItems),this.view.bindClickTargetItem(this.model.recipes),this.onRecipesChanged(this.model.recipes),this.view.bindAddNewRecipeBtn(this.handleAddNewRecipe)}renderNewRecipeOption(e){this.view.createNewItemOptions(this.model.backPackItems)}}class E{constructor(){this.events={}}subscribe(e,t){!this.events[e]&&(this.events[e]=[]),t.forEach(i=>this.events[e].push(i))}unsubscribe(e,t){this.events[e]=this.events[e].filter(i=>t!==i)}emit(e,t){const i=this.events[e];i&&i.forEach((s,a)=>s.call(null,t[a]))}}const l=new E,_=[{name:"blitzKnuckles",image:"/src/images/item/blitzKnuckles.jpg"},{name:"claymore",image:"/src/images/item/claymore.jpg"},{name:"demonEdge",image:"/src/images/item/demonEdge.jpg"},{name:"eaglesong",image:"/src/images/item/eaglesong.jpg"},{name:"javelin",image:"/src/images/item/javelin.jpg"},{name:"mithrilHammer",image:"/src/images/item/mithrilHammer.jpg"},{name:"pointBooster",image:"/src/images/item/pointBooster.jpg"},{name:"quarterstaff",image:"/src/images/item/quarterstaff.jpg"},{name:"sacredRelic",image:"/src/images/item/sacredRelic.jpg"},{name:"shadowAmulet",image:"/src/images/item/shadowAmulet.jpg"},{name:"talismanOfEvasion",image:"/src/images/item/talismanOfEvasion.jpg"},{name:"ultimateOrb",image:"/src/images/item/ultimateOrb.jpg"},{name:"beltOfStrength",image:"/src/images/item/beltOfStrength.jpg"},{name:"bladeOfalacrity",image:"/src/images/item/bladeOfalacrity.jpg"},{name:"bootsOfSpeed",image:"/src/images/item/bootsOfSpeed.jpg"},{name:"ghostScepter",image:"/src/images/item/ghostScepter.jpg"},{name:"glovesOfHaste",image:"/src/images/item/glovesOfHaste.jpg"},{name:"kaya",image:"/src/images/item/kaya.jpg"},{name:"morbidMask",image:"/src/images/item/morbidMask.jpg"},{name:"ogreAxe",image:"/src/images/item/ogreAxe.jpg"},{name:"recipe",image:"/src/images/item/recipe.jpg"},{name:"sagesMask",image:"/src/images/item/sagesMask.jpg"},{name:"staffOfWizardry",image:"/src/images/item/staffOfWizardry.jpg"},{name:"talismanOfEvasion",image:"/src/images/item/talismanOfEvasion.jpg"}],u="/assets/recipe.b1732290.jpg",k=[{name:"aghanims_scepter",image:"/src/images/goods/aghanims_scepter.jpg",ingredients:["pointBooster","staffOfWizardry","ogreAxe","bladeOfalacrity"]},{name:"butterfly",image:"/src/images/goods/butterfly.jpg",ingredients:["eaglesong","quarterstaff","talismanOfEvasion"]},{name:"divine_rapier",image:"/src/images/goods/divine_rapier.jpg",ingredients:["demonEdge","sacredRelic"]},{name:"ethereal_blade",image:"/src/images/goods/ethereal_blade.jpg",ingredients:["ghostScepter","kaya","recipe"]},{name:"eye_of_skadi",image:"/src/images/goods/eye_of_skadi.jpg",ingredients:["ultimateOrb","ultimateOrb","pointBooster"]},{name:"maelstrom",image:"/src/images/goods/maelstrom.jpg",ingredients:["mithrilHammer","javelin"]},{name:"mask_of_madness",image:"/src/images/goods/aghanims_scepter.jpg",ingredients:["morbidMask","quarterstaff"]},{name:"power_treads",image:"/src/images/goods/power_treads.jpg",ingredients:["beltOfStrength","glovesOfHaste","bootsOfSpeed"]},{name:"ring_of_basilius",image:"/src/images/goods/ring_of_basilius.jpg",ingredients:["sagesMask","recipe"]},{name:"shadow_blade",image:"/src/images/goods/shadow_blade.jpg",ingredients:["claymore","shadowAmulet","blitzKnuckles"]}];class I{constructor(){const e=JSON.parse(localStorage.getItem("items"));this.recipes=e||k,this.backPackItems=_}addRecipe(e){const{name:t,ingredients:i}=e,s={name:t,image:u,ingredients:i};return this.recipes.find(r=>r.name===t)?(alert("\u0420\u0435\u0446\u0435\u043F\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"),this.recipes):(this.recipes.length<20?(this.recipes.push(s),localStorage.setItem("items",JSON.stringify(this.recipes))):alert("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432!"),alert("\u0420\u0435\u0446\u0435\u043F\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!"),this.recipes)}}const w="/assets/backPack.d51588b0.png";class C{constructor(){c(this,"createCraftCells",e=>{this.craftContainer=document.querySelector(".craft__wrapp"),this.craftContainer.innerHTML="",e.ingredients.forEach(t=>{const i=this.createElement("img"),s=`/src/images/item/${t}.jpg`;i.className="dragZoneCell",i.setAttribute("data-zone",t),i.src=s,this.craftContainer.append(i)})});c(this,"createCurrentIteImage",e=>{const t=this.createElement("img"),i=this.createElement("div","currentItem__describe"),{itemImageUrl:s,itemName:a}=e,r=document.querySelector(".currentItem");r.innerHTML="",i.innerText=a,t.src=s,r.append(t,i)});c(this,"showDeskCraftListeners",()=>{const e=this.getElement(".validateText"),t=this.getElement(".craftBtn"),i=this.getElement(".progressBar__wrapp");[e,t,i].forEach(s=>s.style.opacity=1)});c(this,"reloadCraft",()=>{alert(`\u041F\u0440\u0435\u0434\u043C\u0435\u0442 ${this.targetItem} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!`),this.deskWrapper.innerHTML="";const e=this.createDesk();this.deskWrapper.append(e)});c(this,"fillInProgress",()=>{const e=this.validateCraftStatus(),t=this.getElement(".progressBar").clientWidth,i=this.getElement(".progressBar__fill"),s=this.getElement(".percentProgress"),a=this.getElement(".progressBar__pointer").clientWidth,r=10,n=50,o=()=>{if(i.clientWidth>=t-a)return this.reloadCraft();i.style.width=`${i.clientWidth+r}px`,s.innerText=`${Math.ceil(i.clientWidth/(t-a)*100)}%`,setTimeout(o,n)};e&&o()});c(this,"resetForm",()=>{this.input.value="",this.ingredients.innerHTML="",this.newRecipe.name="",this.newRecipe.ingredients=[]});c(this,"validateNewItem",()=>{const e=this.input.value.trim().length;return e>10?(alert("\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0443\u043A\u0432 \u0432 \u0440\u0435\u0446\u0435\u043F\u0442\u0435 - 10!"),!1):e<1?(alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0430!"),!1):this.newRecipe.ingredients.length<1?(alert("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0434\u043B\u044F \u043A\u0440\u0430\u0444\u0442\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430!"),!1):!0});c(this,"createNodeIngredientItem",e=>{const t=document.createElement("div"),i=document.createElement("div"),s=document.createElement("img");s.className="newItemButton",s.src="./images/close.png",t.className="newItemIngredients",s.setAttribute("name",e),i.innerText=e,t.append(i,s),this.ingredients.append(t)});c(this,"bindDeleteItem",e=>{this.body.addEventListener("click",t=>{if(t.target.classList.value==="newItemButton"){const a=t.target.getAttribute("name"),r=this.newRecipe.ingredients.indexOf(a);t.target.parentElement.remove(),this.newRecipe.ingredients=this.newRecipe.ingredients.filter((n,o)=>o!==r)}})});c(this,"bindDragActionDragZone",()=>{document.querySelectorAll(".dragZoneCell").forEach(t=>{t.addEventListener("dragenter",this.handlerDragEnter),t.addEventListener("dragleave",this.handleDragLeave),t.addEventListener("dragover",this.handleDragOver),t.addEventListener("drop",this.handleDragDrop)})});c(this,"bindDragActionDragItem",()=>{document.querySelectorAll(".img__item.backPack__image").forEach(t=>{t.addEventListener("dragstart",this.handlerDragStart),t.addEventListener("dragend",this.handleDragEnd)})});this.app=document.querySelector("#app"),this.body=this.getElement("body"),this.backPackModal=this.createModal("backPackModal__wrapp","backPackModal","backPackModal__btn","backPackModal__text","\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B","backPackModal__img",w),this.recipeModal=this.createModal("recipeModal__wrapp","recipeModal","recipeModal__btn","recipeModal__text","\u0420\u0435\u0446\u0435\u043F\u0442\u044B","recipeModal__img",u),this.formAddNewRecipe=this.createFormAddNewRecipe(),this.deskWrapper=this.createElement("div","deskWrapp"),this.desk=this.createDesk(),this.deskWrapper.append(this.desk),this.app.append(this.backPackModal,this.deskWrapper,this.recipeModal,this.formAddNewRecipe),this.recipeModalContainer=document.querySelector(".recipeModal"),this.backPackModalContainer=document.querySelector(".backPackModal"),this.select=document.querySelector(".select"),this.newRecipeSaveBtn=this.getElement(".newRecipeSave"),this.input=this.getElement(".input"),this.ingredients=this.getElement(".ingredients"),this.form=this.getElement(".form"),this.modalCloseBtns=[this.getElement(".backPackModal__btn"),this.getElement(".recipeModal__btn"),this.getElement(".form__btn")],this.modals=[this.getElement(".backPackModal"),this.getElement(".recipeModal"),this.getElement(".form")],this.craftZone=this.getElement(".craft__wrapp"),this.newRecipe={name:"",ingredients:[]},this.targetItem="",l.subscribe("clickOnTargettem",[this.createCraftCells,this.createCurrentIteImage,this.showDeskCraftListeners]),l.subscribe("addListenerDragItems",[this.bindDragActionDragItem,this.bindDragActionDragZone]),l.subscribe("createNodeIngredientItem",[this.createNodeIngredientItem]),this.bindCreateNodeItem(),this.bindCraft(),this.bindDeleteItem(),this.bindtoggleModals()}createElement(e,t){return this.ele=document.createElement(e),t&&(this.ele.className=t),this.ele}getElement(e){return document.querySelector(e)}createModal(e,t,i,s,a,r,n){const o=this.createElement("div",e),d=this.createElement("div",t),g=this.createElement("button",i),p=this.createElement("div",s),h=this.createElement("img",r);return p.innerText=a,h.src=n,g.append(p,h),o.append(g,d),o}createModalContent(e,t){const i=t.classList.value;let s="";i==="recipeModal"&&(s="recipeModal__image"),i==="backPackModal"&&(s="backPack__image"),t.innerHTML="",e.forEach((a,r)=>{const n=this.createElement("img",`img__item ${s}`);return n.setAttribute("draggable","true"),n.setAttribute("data-item",r),n.setAttribute("name",a.name),n.src=a.image,t.appendChild(n)})}createDesk(){const e=this.createElement("div","desk"),t=this.createCurrentItem(),i=this.createProgressBar(),s=this.createCraftBtn(),a=this.createValidateText(),r=this.createDataZone();return e.append(t,i,s,a,r),e}createCurrentItem(){const e=this.createElement("div","currentItem"),t=this.createElement("img","currentItem__img"),i=this.createElement("div","currentItem__text");return i.innerText="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442!",e.append(i,t),e}createProgressBar(){const e=this.createElement("div","progressBar__wrapp"),t=this.createElement("div","progressBar"),i=this.createElement("div","progressBar__fill"),s=this.createElement("div","progressBar__pointer"),a=this.createPercentProgress();return t.append(i,s),e.append(t,a),e}createCraftBtn(){const e=this.createElement("button","craftBtn");return e.innerText="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C",e}createValidateText(){const e=this.createElement("div","validateText");return e.innerText="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u044F\u0447\u0435\u0439\u043A\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u043C\u0438",e}createDataZone(){return this.createElement("div","craft__wrapp")}createPercentProgress(){const e=this.createElement("div","percentProgress");return e.innerText="0%",e}createFormAddNewRecipe(){const e=this.createElement("div","form__wrapper"),t=this.createElement("div","form__btn"),i=this.createElement("img","form__image"),s=this.createElement("div","title"),a=this.createElement("div","form"),r=this.createElement("div","form__label"),n=this.createElement("div","newRecipeName"),o=this.createElement("input","input"),d=this.createElement("div","ingredients"),g=this.createElement("div","ingredients__text"),p=this.createElement("select","select"),h=this.createElement("button","newRecipeSave");return s.innerText="\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442",n.innerText="\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0446\u0435\u043F\u0442\u0430",o.placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0430",g.innerText="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0434\u043B\u044F \u0440\u0435\u0446\u0435\u043F\u0442\u0430",h.innerText="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",i.src=u,p.size=6,r.append(n,o),t.append(i,s),a.append(r,n,o,d,g,p,h),e.append(t,a),e}createNewItemOptions(e){e.forEach(t=>{const i=document.createElement("option"),s=t.name;i.className="option",i.innerText=s,i.value=s,this.select.append(i)})}validateCraftStatus(){this.dragZoneCells=document.querySelectorAll(".dragZoneCell");let e=!0;return this.dragZoneCells.length<1&&(e=!1),this.dragZoneCells.forEach(t=>{t.getAttribute("successItem")||(e=!1)}),e}createNewItem(){if(this.newRecipe.ingredients.length<4){const t=this.value;this.newRecipe.ingredients.push(t),this.createNodeItems(t)}else alert("\u0420\u0435\u0446\u0435\u043F\u0442 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432!")}handlerDragStart(e){e.dataTransfer.setData("dragItem",this.dataset.item)}handlerDragEnter(e){e.preventDefault()}handleDragOver(e){e.preventDefault()}handleDragDrop(e){const t=e.dataTransfer.getData("dragItem");document.querySelector(`[data-item="${t}"]`).getAttribute("name")===this.getAttribute("data-zone")?(this.setAttribute("successItem",!0),this.style.filter="grayscale(0)",this.style.opacity=1):alert("\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442!")}bindValidateNewRecipeNameExist(e){const t=this.newRecipe.name;return e.filter(i=>i===t).length}bindAddNewRecipeBtn(e){this.body.addEventListener("click",t=>{if(t.target.classList.value==="newRecipeSave"&&this.validateNewItem()){const r=this.input.value;this.newRecipe.name=r,e(this.newRecipe),this.resetForm()}})}bindCraft(){this.body.addEventListener("click",e=>{if(e.target.classList.value==="craftBtn"){const s=this.validateCraftStatus(),a=this.getElement(".validateText");s?(a.innerText="\u041A\u0440\u0430\u0444\u0442\u0438\u043C!",a.style.color="green"):(a.innerText="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u044F\u0447\u0435\u0439\u043A\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u043C\u0438",a.style.color="red")}this.fillInProgress()})}bindCreateNodeItem(){this.body.addEventListener("click",e=>{e.target.classList.value;const t="option",i=4,s=this.newRecipe.ingredients.length;if(e.target.classList.value===t)if(s<i){const a=e.target.value;this.newRecipe.ingredients.push(a),l.emit("createNodeIngredientItem",[a])}else alert("\u0420\u0435\u0446\u0435\u043F\u0442 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432!")})}bindtoggleModals(){this.modals.forEach((e,t)=>{this.modalCloseBtns[t].addEventListener("click",()=>{e.classList.toggle("hide")})})}bindClickTargetItem(e){this.body.addEventListener("click",t=>{const i="img__item recipeModal__image";if(t.target.classList.value===i){const s=t.target.getAttribute("name"),a=e.filter(d=>d.name===s)[0],r=a.image,n=a.name,o={itemImageUrl:r,itemName:n};this.targetItem=s,l.emit("clickOnTargettem",[a,o]),l.emit("addListenerDragItems",[])}})}}new v(new I,new C);
