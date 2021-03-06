/* eslint-disable prefer-regex-literals */
/**
 * Recipecard web component
 * @module RecipeCard
 */

import { addRecipe, addRecipebyList, checkFavorite, removeRecipebyList } from './UserLocalStorage.js';
import homepageRefreshFavoriteSection from '../scripts/homepage.js';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/recipeCard.css';

const recipeCardTemplate = document.createElement('template');
recipeCardTemplate.innerHTML = `
  <article class="recipe-card">
    <img class="recipe-favorite" src="../assets/favorite.svg" alt="favorite" />
    <img class="recipe-checkmark" src="../assets/checkmark.svg" alt="selected" />
    <img class="recipe-image"><img/>
    <div class="recipe-subdescription">
      <p class="recipe-name">Lorem ipsum dolor sit amet </p>
      <p class="recipe-calories"><span class="recipe-calories-number">500</span> <span class="recipe-calories-unit">calories</span></p>
    </div>
  </article>
  <div class="dropdown-content">
    <label class="entry">Create a new list: 
      <input type="text" class="user-input">
    </label>
    <button class="submit">Add to Favorite</button>
    <button class="cancel">Cancel</button>
  </div>
`;

const listEntryTemplate = document.createElement('template');
listEntryTemplate.innerHTML = `
  <label class="container">
	  <span>My Favorites</span>
	  <input type="checkbox">
	  <span class="checkmark"> </span>
  </label>
`;

class RecipeCard extends HTMLElement {
  /**
   * Setter for the recipe card's recipe
   * @param {object} recipeObj The recipe object from spoonacular
   */
  set recipe(recipeObj) {
    this.recipeObj = recipeObj;
    this.recipeId = recipeObj.id;
    const recipeImg = this.shadow.querySelector('.recipe-image');
    const recipeCal = this.shadow.querySelector('.recipe-calories-number');
    const recipeCalUnit = this.shadow.querySelector('.recipe-calories-unit');
    const recipeName = this.shadow.querySelector('.recipe-name');
    recipeImg.src = recipeObj.image;
    recipeName.innerHTML = recipeObj.title;
    recipeCal.innerHTML = recipeCal.innerHTML.replace('500', recipeObj.nutrition.nutrients[0].amount);
    recipeCalUnit.innerHTML = recipeCalUnit.innerHTML.replace('calories', recipeObj.nutrition.nutrients[0].unit);

    if (checkFavorite(recipeObj)) {
      this.isFavorite = true;
      this.initializeHearts();
    }
  }

  /**
   * Getter for the recipe card's recipe
   * @return {object} The recipe card's recipe object from Spoonacular
   */
  get recipe() {
    return this.recipeObj;
  }

  /**
   * Construtor for recipe card
   * @constructor
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(recipeCardTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
    this.selectMode = false;
    this.isSelected = false;
    this.isFavorite = false;
    this.dropdown = false;
    this.initializeHearts();
    this.initializeDropdown();
  }

  /**
   * initilize drop down menu
   */
  initializeDropdown() {
    const dropdownElem = this.shadow.querySelector('.dropdown-content');

    /**
     * remove all container first
     * reason: homepage, searchpage all recipeCards need to reflect all newly created lists
     */
    const removed = dropdownElem.querySelectorAll('.container');
    console.log(removed);
    for (let i = 0; i < removed.length; i += 1) {
      removed[i].remove();
    }

    // clear custom list input
    const userInput = document.querySelector('.user-input');
    if (userInput) {
      userInput.value = '';
    }
    /** ******************************** */

    for (let i = 0; i < localStorage.length; i += 1) {
      const entry = listEntryTemplate.content.cloneNode(true);
      if (localStorage.key(i) === 'favorites-master') continue;
      else if (localStorage.key(i) === 'My Favorites') entry.querySelector('input').checked = true;
      else entry.querySelector('.container').innerHTML = entry.querySelector('.container').innerHTML.replace('My Favorites', localStorage.key(i));
      dropdownElem.insertBefore(entry, dropdownElem.firstChild);
    }
  }

  /**
   * initilize heart, based on current status
   */
  initializeHearts() {
    // console.log('Checking favorites');
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    this.isFavorite = checkFavorite(this.recipeObj);
    if (this.isFavorite) {
      favoriteIcon.src = '../assets/favorite-selected.svg';
    } else {
      favoriteIcon.src = '../assets/favorite.svg';
    }
  }

  /**
   * Sets up the recipe card to enter selection mode
   * Must be called when entering selection mode
   */
  enterSelectMode() {
    this.selectMode = true;
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    favoriteIcon.style.display = 'none';
  }

  /**
   * Brings the recipe card out of selection mode
   * Must be called when exiting selection mode or the UI might not be reset
   */
  exitSelectMode() {
    this.selectMode = false;
    if (this.isSelected) this.deselect();
    const checkmark = this.shadow.querySelector('.recipe-checkmark');
    checkmark.style.display = 'none';
    this.style.filter = 'brightness(100%)';
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    favoriteIcon.style.display = 'block';
  }

  /**
   * Selects the recipe with a checkmark
   */
  select() {
    const checkmark = this.shadow.querySelector('.recipe-checkmark');
    this.isSelected = true;
    checkmark.style.display = 'block';
    this.style.filter = 'brightness(90%)';
    const event = new CustomEvent('selected', { detail: this });
    this.dispatchEvent(event);
  }

  /**
   * Deselects the recipe by removing the checkmark
   */
  deselect() {
    const checkmark = this.shadow.querySelector('.recipe-checkmark');
    this.isSelected = false;
    checkmark.style.display = 'none';
    this.style.filter = 'brightness(100%)';
    const event = new CustomEvent('deselected', { detail: this });
    this.dispatchEvent(event);
  }

  /**
   * Dispatches an event to remove this recipe
   */
  delete() {
    const event = new CustomEvent('removed', { detail: this.recipeObj });
    this.dispatchEvent(event);
  }

  /**
   * Shows the favorites dropdown on the recipe card
   */
  showDropdown() {
    this.dropdown = true;
    const dropdownContent = this.shadow.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
  }

  /**
   * Hides the favorites dropdown on the recipe card
   */
  hideDropdown() {
    this.dropdown = false;
    const dropdownContent = this.shadow.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  }

  /**
   * Checks that at least one list is selected for adding recipe
   */
  checkCheckedList() {
    const containers = this.shadow.querySelectorAll('.container');
    let userInput = this.shadow.querySelector('.user-input');
    userInput = userInput.value;
    // check if trying to add to a newly created list
    if (userInput !== '') {
      return true;
    }
    // if above not true, will loop through all the lists to see if at least one is checked
    for (let i = 0; i < containers.length; i += 1) {
      const checkmark = containers[i].querySelector('input');
      if (checkmark.checked) {
        return true;
      }
    }
    return false;
  }

  /**
   * Add the recipe to all checked lists in the dropdown
   */
  addToCheckedLists() {
    const containers = this.shadow.querySelectorAll('.container');
    for (let i = 0; i < containers.length; i += 1) {
      const checkmark = containers[i].querySelector('input');
      if (checkmark.checked) {
        addRecipebyList(containers[i].querySelector('span').innerHTML, this.recipeObj);
      }
    }
  }

  /**
   * Adds the recipe to a custom list
   */
  addToCustomList() {
    let userInput = this.shadow.querySelector('.user-input');
    userInput = userInput.value;
    if (userInput !== '') {
      console.log(userInput);
      addRecipebyList(userInput, this.recipeObj);
    }
  }

  connectedCallback() {
    // If the favorite icon is clicked, favorite the item
    const recipeCard = this;
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    const submitFavorites = this.shadow.querySelector('.submit');
    const cancelFavorites = this.shadow.querySelector('.cancel');
    const dropdownContent = this.shadow.querySelector('.dropdown-content');

    /*
     * Click on recipe card changes page or selects card
     */
    this.addEventListener('click', () => {
      // Check to see if selecting is allowable (only in edit/move mode)
      if (this.selectMode) {
        // handle toggling state for the checkmark/selected property
        if (this.isSelected) {
          this.deselect();
        } else {
          this.select();
        }
      } else if (!this.dropdown) {
        // modified by Dennis
        // do not need this line becasue recipe is doing another fetch
        // window.localStorage.setItem('recipeObj', JSON.stringify(this.recipeObj));

        window.location.href = `recipe.html?id=${this.recipeId}`;
      }
    });

    /* Click favorite icon prompts with dropdown */
    favoriteIcon.addEventListener('click', (event) => {
      // Stop propagation to the parent so you don't go to the recipe page
      event.stopPropagation();
      if (!this.isFavorite) {
        favoriteIcon.src = '../assets/favorite-selected.svg';
        this.initializeDropdown();
        this.showDropdown();
        console.log('Prompting user to add to favorites lists');
      } else {
        let toRemove = false;
        // eslint-disable-next-line
        toRemove = window.confirm(`Unhearting a recipe removes from all favorite lists. To delete only from this list, try edit mode on favorite page. Are you sure you want to continue?`);
        // continues to remove the recipe from list if user confirms they want to remove
        if (toRemove) {
          this.isFavorite = false;
          const containers = this.shadow.querySelectorAll('.container');
          // goes through all the lists and removes the recipe if it is found
          removeRecipebyList('favorites-master', this.recipeObj);
          for (let i = 0; i < containers.length; i += 1) {
            removeRecipebyList(containers[i].querySelector('span').innerHTML, this.recipeObj);
          }
          favoriteIcon.src = '../assets/favorite.svg';
          console.log('Remove item from ALL favorites lists here');

          /* Reload the page as a shortcut for showing updated lists */
          // console.log('testing for refreshing the page', window.location.pathname); // /webpages/home.html
          /**
           * call reloading function from homepage.js to reload specific place
           */
          const homePageReg = new RegExp('home.html');
          const searchPageReg = new RegExp('search.html');
          if (homePageReg.test(window.location.pathname) === true) {
            homepageRefreshFavoriteSection();
          } else if (searchPageReg.test(window.location.pathname) === true) {
            recipeCard.hideDropdown();
          } else {
            location.reload();
          }
        }
        // recipeCard.hideDropdown();
      }
    });

    /* Mouse hover for favorite icon */
    favoriteIcon.addEventListener('mouseover', () => {
      favoriteIcon.src = '../assets/favorite-selected.svg';
    });

    favoriteIcon.addEventListener('mouseout', () => {
      if (!this.isFavorite) {
        favoriteIcon.src = '../assets/favorite.svg';
      }
    });

    /* When click the favorite icon, dropdown content showup */
    favoriteIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      this.showDropdown();
    });

    /* stops propagation of clicks on dropdown content box to the recipe card
		This prevents changing page when the dropdown menu is clicked.  */
    dropdownContent.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    /* handle hovering off of the dropdown so it hides */
    dropdownContent.addEventListener('mouseleave', () => {
      recipeCard.hideDropdown();
    });

    // submit button for favorites dropdown
    submitFavorites.addEventListener('click', (event) => {
      if (!this.isFavorite) {
        if (!this.checkCheckedList()) {
          // eslint-disable-next-line
          window.alert(`Please add to at least one list`);
        } else {
          addRecipe(this.recipeObj);
          this.addToCheckedLists();
          this.addToCustomList();
          /* Reload the page as a shortcut for showing new lists */

          // make this is a favorite
          this.isFavorite = true;
          favoriteIcon.src = '../assets/favorite-selected.svg';
          /**  **********************************  */
          const homePageReg = new RegExp('home.html');
          const searchPageReg = new RegExp('search.html');
          if (homePageReg.test(window.location.pathname) === true) {
            homepageRefreshFavoriteSection();
          } else if (searchPageReg.test(window.location.pathname) === true) {
            this.initializeDropdown();
            recipeCard.hideDropdown();
          } else {
            location.reload();
          }
        }
      }
      event.stopPropagation();
    });

    // cancel button for favorites dropdown
    cancelFavorites.addEventListener('click', (event) => {
      recipeCard.hideDropdown();
      event.stopPropagation();
    });
  }
}

customElements.define('recipe-card-component', RecipeCard);
