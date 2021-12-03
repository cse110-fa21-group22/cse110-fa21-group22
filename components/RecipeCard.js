import { addRecipe, addRecipebyList, checkFavorite, removeRecipebyList } from './UserLocalStorage.js';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/recipeCard.css';

const recipeCardTemplate = document.createElement('template');
recipeCardTemplate.innerHTML = `
  <article class="recipe-card">
    <img class="recipe-favorite" src="../assets/favorite.svg" alt="favorite" />
    <img class="recipe-remove" src="../assets/favorite-remove.svg" alt="remove" />
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
  set recipe(recipeObj) {
    this.setAttribute('recipe-id', recipeObj.id);
    const recipeImg = this.shadow.querySelector('.recipe-image');
    const recipeCal = this.shadow.querySelector('.recipe-calories-number');
    const recipeCalUnit = this.shadow.querySelector('.recipe-calories-unit');
    const recipeName = this.shadow.querySelector('.recipe-name');

    recipeImg.src = recipeObj.image;
    recipeName.innerHTML = recipeObj.title;
    recipeCal.innerHTML = recipeCal.innerHTML.replace('500', recipeObj.nutrition.nutrients[0].amount);
    recipeCalUnit.innerHTML = recipeCalUnit.innerHTML.replace('calories', recipeObj.nutrition.nutrients[0].unit);

    if (checkFavorite(recipeObj.id)) {
      this.isFavorite = true;
      this.initializeHearts();
    }
  }

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

  initializeDropdown() {
    const dropdownElem = this.shadow.querySelector('.dropdown-content');
    for (let i = 0; i < localStorage.length; i += 1) {
      const entry = listEntryTemplate.content.cloneNode(true);
      if (localStorage.key(i) === 'favorites-master') continue;
      else if (localStorage.key(i) === 'My Favorites') entry.querySelector('input').checked = true;
      else entry.querySelector('.container').innerHTML = entry.querySelector('.container').innerHTML.replace('My Favorites', localStorage.key(i));
      dropdownElem.insertBefore(entry, dropdownElem.firstChild);
    }
  }

  initializeHearts() {
    // console.log('Checking favorites');
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    this.isFavorite = checkFavorite(this.getAttribute('recipe-id'));
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
    const favoriteRemove = this.shadow.querySelector('.recipe-remove');
    favoriteRemove.style.display = 'block';
  }

  /**
   * Brings the recipe card out of selection mode
   * Must be called when exiting selection mode or the UI might not be reset
   */
  exitSelectMode() {
    this.selectMode = false;
    if (this.isSelected) this.deselect();
    const favoriteRemove = this.shadow.querySelector('.recipe-remove');
    favoriteRemove.style.display = 'none';
  }

  /**
   * Selects the recipe with a checkmark
   */
  select() {
    const checkmark = this.shadow.querySelector('.recipe-checkmark');
    this.isSelected = true;
    checkmark.style.display = 'block';
    this.style.filter = 'brightness(90%)';
    const event = new CustomEvent('selected', { detail: this.getAttribute('recipe-id') });
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
    const event = new CustomEvent('deselected', { detail: this.getAttribute('recipe-id') });
    this.dispatchEvent(event);
  }

  /**
   * Dispatches an event to remove this recipe
   */
  delete() {
    const event = new CustomEvent('removed', { detail: this.getAttribute('recipe-id') });
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
   * Add the recipe to all checked lists in the dropdown
   */
  addToCheckedLists() {
    const containers = this.shadow.querySelectorAll('.container');
    for (let i = 0; i < containers.length; i += 1) {
      const checkmark = containers[i].querySelector('input');
      if (checkmark.checked) {
        addRecipebyList(containers[i].querySelector('span').innerHTML, this.getAttribute('recipe-id'));
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
      addRecipebyList(userInput, this.getAttribute('recipe-id'));
    }
  }

  connectedCallback() {
    // If the favorite icon is clicked, favorite the item
    const recipeCard = this;
    const favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    const favoriteRemove = this.shadow.querySelector('.recipe-remove');
    const submitFavorites = this.shadow.querySelector('.submit');
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
        console.log('transferring page');
        window.location.href = `recipe.html?id=${this.getAttribute('recipe-id')}`;
      }
    });

    /* Click favorite icon prompts with dropdown */
    favoriteIcon.addEventListener('click', (event) => {
      // Stop propagation to the parent so you don't go to the recipe page
      event.stopPropagation();
      if (!this.isFavorite) {
        favoriteIcon.src = '../assets/favorite-selected.svg';
        this.showDropdown();
        console.log('Prompting user to add to favorites lists');
      } else {
        let toRemove = false;
        toRemove = confirm(`Unhearting a recipe removes from all favorite lists. To delete only from this list, try edit mode on favorite page. Are you sure you want to continue?`);

        // continues to remove the recipe from list if user confirms they want to remove
        if (toRemove) {
          this.isFavorite = false;
          const containers = this.shadow.querySelectorAll('.container');
          // goes through all the lists and removes the recipe if it is found
          removeRecipebyList('favorites-master', this.getAttribute('recipe-id'));
          for (let i = 0; i < containers.length; i += 1) {
            removeRecipebyList(containers[i].querySelector('span').innerHTML, this.getAttribute('recipe-id'));
          }
          favoriteIcon.src = '../assets/favorite.svg';
          console.log('Remove item from ALL favorites lists here');
          /* Reload the page as a shortcut for showing updated lists */
          location.reload();
        }
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
    favoriteIcon.addEventListener('click', () => {
      this.showDropdown();
    });

    /* Remove button event listener */
    favoriteRemove.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('Removing recipe from THIS list...');
      this.delete();
    });

    /* stops propagation of clicks on dropdown content box to the recipe card
		This prevents changing page when the dropdown menu is clicked.  */
    dropdownContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    /* handle hovering off of the dropdown so it hides */
    dropdownContent.addEventListener('mouseleave', () => {
      recipeCard.hideDropdown();
    });

    // submit button for favorites dropdown
    submitFavorites.addEventListener('click', (event) => {
      // TODO: need to check the values that are clicked
      if (!this.isFavorite) {
        // add to // must have 'favorites-master' no matter what
        addRecipe(this.getAttribute('recipe-id'));
        this.addToCheckedLists();
        this.addToCustomList();
        /* Reload the page as a shortcut for showing new lists */
        location.reload();
      }
      event.stopPropagation();
    });
  }
}

customElements.define('recipe-card-component', RecipeCard);
