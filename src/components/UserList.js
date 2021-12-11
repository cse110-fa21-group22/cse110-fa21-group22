/**
 * UserList Web component
 * @module UserList
 */

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
      <img src="../assets/favorite-delete-list.svg" class="delete-icon">
      <button class="copy-here">Copy to This List</button>
    </div>
    <section class="recipe-section">
      <h5>No favorites added yet</h5>
    </section>
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

      const { cardList } = this;
      // Remove a recipe from localStorage and the userList when it is deleted
      recipeCard.addEventListener('removed', (event) => {
        console.log('removing recipe');
        removeRecipebyList(this.name, event.detail);
        recipeCard.remove();
        for (let i = 0; i < this.cardList.length; i += 1) {
          if (cardList[i].recipeId === event.detail.id) {
            // Remove the item from cardList
            cardList.splice(i, 1);
          }
        }
        // Check whether the list is now empty and format appropriately
        this.checkForEmptyList();
      });
    }
  }

  /**
   * Getter for the recipe list
   * @returns {object} a list of recipe cards in this UserList
   */
  get list() {
    return this.cardList;
  }

  /**
   * Pushes a recipe to the UserList
   * @param {object} recipeCard the recipe card to add to the list
   */
  pushRecipe(recipeCard) {
    addRecipebyList(this.name, recipeCard.recipe);
    const recipeSection = this.shadow.querySelector('.recipe-section');
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
    const { cardList } = this;
    recipeCard.addEventListener('removed', (event) => {
      removeRecipebyList(this.name, event.detail);
      recipeCard.remove();
      for (let i = 0; i < this.cardList.length; i += 1) {
        if (cardList[i].recipeId === event.detail.id) {
          // Remove the item from cardList
          cardList.splice(i, 1);
        }
      }
      // Check whether the list is now empty and format appropriately
      this.checkForEmptyList();
    });
    recipeSection.appendChild(recipeCard);
    this.cardList.push(recipeCard);
    this.checkForEmptyList();
  }

  /**
   * Checks whether the UserList is empty and formats it appropriately if so
   */
  checkForEmptyList() {
    const recipeSection = this.shadow.querySelector('.recipe-section');
    const emptyNotice = this.shadow.querySelector('.recipe-section h5');
    // If the list is empty, show the empty notice and reduce the height
    if (this.cardList.length === 0) {
      recipeSection.style.height = '40px';
      emptyNotice.style.display = 'inline-block';
    } else {
      recipeSection.style.height = 'auto';
      emptyNotice.style.display = 'none';
    }
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

  /**
   * constructor for UserList web-component
   * @constructor
   */
  constructor() {
    super();
    this.cardList = [];
    this.name = '';
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(UserListTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() {
    const copyHereButton = this.shadow.querySelector('.copy-here');
    // Add an event listener to broadcast an event when copy here is clicked
    // This event will be received in favorites.js
    copyHereButton.addEventListener('click', () => {
      const event = new CustomEvent('copy-to-list', { detail: this });
      document.dispatchEvent(event);
    });

    // Check whether the list is empty when loaded and format it appropriately
    this.checkForEmptyList();
  }
}

customElements.define('user-list', UserList);
