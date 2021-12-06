import { removeRecipebyList, addRecipebyList } from './UserLocalStorage.js';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/UserList.css';

const UserListTemplate = document.createElement('template');
UserListTemplate.innerHTML = `
  <div class="scroll">
    <div class="list-name">
      <h4>Favorites Recipes</h4>
      <button class="copy-here">Copy to This List</button>
    </div>
    <section class="recipe-section">
    </div>
  </div>`;

class UserList extends HTMLElement {
  /**
   * Setter used to initialize recipe cards
   * @param {object} listObj recipe data fetched from spoonacular.
   */
  set list(listObj) {
    const populateRrecipe = this.shadow.querySelector('.recipe-section');
    console.log('UserList component, ', listObj);

    for (const recipeid in listObj) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = listObj[recipeid];
      populateRrecipe.appendChild(recipeCard);
      this.cardList.push(recipeCard);
      // Add event listeners to the recipe card for when it is selected or deselected
      recipeCard.addEventListener('selected', (event) => {
        const innerEvent = new CustomEvent('selected', { detail: event.detail });
        this.dispatchEvent(innerEvent);
      });
      recipeCard.addEventListener('deselected', (event) => {
        const innerEvent = new CustomEvent('deselected', { detail: event.detail });
        this.dispatchEvent(innerEvent);
      });
      // Remove a recipe from localStorage and the userList when it is deleted
      recipeCard.addEventListener('removed', (event) => {
        removeRecipebyList(this.name, event.detail);
        recipeCard.remove();
      });
    }
  }

  /**
   * Adds a recipe to the userList, including localStorage
   * @param {number} recipeId the ID of the recipe 
   */
  /*addRecipe(recipe) {
    console.log(`adding recipe ${recipe.id} to list`);
    addRecipebyList(this.name, recipe.id);
    const recipeCard = document.createElement('recipe-card-component');
    const recipeSection = this.shadow.querySelector('.recipe-section');
    recipeCard.recipe = recipe;
    recipeSection.appendChild(recipeCard);
  }*/

  /**
   * Pushes a recipe to the UserList
   * @param {object} recipeCard the recipe card to add to the list
   */
  pushRecipe(recipeCard) {
    addRecipebyList(this.name, parseInt(recipeCard.getAttribute('recipe-id')));
    const recipeSection = this.shadow.querySelector('.recipe-section');
    recipeSection.appendChild(recipeCard);
  }

  /**
   * Getter for the recipe list
   * @returns {object} a list of recipe cards in this UserList
   */
  get list() {
    return this.cardList;
  }

  /**
   * Setter for the UserList's name
   * @param {string} name the name of the UserList
   */
  set listName(name) {
    this.name = name;
    const listTitle = this.shadow.querySelector('.list-name h4');
    listTitle.textContent = name;
  }

  /**
   * Getter for the UserList's name
   * @returns {string} the UserList's name
   */
  get listName() {
    return this.name;
  }

  constructor() {
    super();
    this.cardList = [];
    this.name = '';
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(UserListTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() {
    let copyHereButton = this.shadow.querySelector('.copy-here');

    // Add an event listener to broadcast an event when copy here is clicked
    copyHereButton.addEventListener('click', () => {
        console.log("dispatching event");
        const event = new CustomEvent('copy-to-list', { detail: this });
        document.dispatchEvent(event);
    });
  }
}

customElements.define('user-list', UserList);
