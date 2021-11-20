import { addRecipe, addRecipebyList, checkFavorite, removeRecipe, removeRecipebyList, createList} from "./UserLocalStorage.js";

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/recipeCard.css';

const recipeCardTemplate = document.createElement('template');
recipeCardTemplate.innerHTML = `
	<article class="recipe-card">
    <div class="dropdown">
    	<img class="recipe-favorite" src="../assets/favorite.svg" alt="favorite" />
		<div class="dropdown-content">
			

    	<label class="entry">Create a new list: 
      		<input type="text" class="user-input">
    	</label>
    
    	<button class="submit">Submit </button>
  		</div>
	</div>
	<img class="recipe-remove" src="../assets/favorite-remove.svg" alt="remove" />
	<img class="recipe-checkmark" src="../assets/checkmark.svg" alt="selected" />
    <img class="recipe-image"><img/>
    <div class="recipe-subdescription">
      <p class="recipe-name">Lorem ipsum dolor sit amet </p>
      <p class="recipe-calories"><span class="recipe-calories-number">500</span> calories</p>
    </div>
  </article>
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
		this.setAttribute('recipe-id', recipeObj['id']);
		const recipeImg = this.shadow.querySelector('.recipe-image');
		// const recipeCal = this.shadow.querySelector('.recipe-calorie-number');
		const recipeName = this.shadow.querySelector('.recipe-name');

		recipeImg.src = recipeObj['image'];
		recipeName.innerHTML = recipeObj['title'];
		// recipeCal.innerHTML = recipeObj['calories'];

		if (checkFavorite(recipeObj['id'])) {
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
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i) === 'favorites-master') continue;
			const entry = listEntryTemplate.content.cloneNode(true);
			entry.querySelector('.container').innerHTML = entry.querySelector('.container').innerHTML.replace('My Favorites', localStorage.key(i));	
			dropdownElem.insertBefore(entry, dropdownElem.firstChild);
		}
	}

	initializeHearts() {
		// console.log("Checking favorites");
		let favoriteIcon = this.shadow.querySelector('.recipe-favorite');
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
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');
		favoriteRemove.style.display = 'block';
	}

	/**
	 * Brings the recipe card out of selection mode
	 * Must be called when exiting selection mode or the UI might not be reset
	 */
	exitSelectMode() {
		this.selectMode = false;
		if (this.isSelected) this.deselect();
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');
		favoriteRemove.style.display = 'none';
	}

	/**
	 * Selects the recipe with a checkmark
	 */
	select() {
		let checkmark = this.shadow.querySelector('.recipe-checkmark');
		this.isSelected = true;
		checkmark.style.display = 'block';
		this.style.filter = 'brightness(90%)';
		const event = new CustomEvent('selected', {detail: this.getAttribute('recipe-id')});
		this.dispatchEvent(event);
	}

	/**
	 * Deselects the recipe by removing the checkmark
	 */
	deselect() {
		let checkmark = this.shadow.querySelector('.recipe-checkmark');
		this.isSelected = false;
		checkmark.style.display = 'none';
		this.style.filter = 'brightness(100%)';
		const event = new CustomEvent('deselected', {detail: this.getAttribute('recipe-id')});
		this.dispatchEvent(event);
	}
	/**
	 * Dispatches an event to remove this recipe
	 */
	delete() {
		const event = new CustomEvent('removed', {detail: this.getAttribute('recipe-id')});
		this.dispatchEvent(event);
	}

	/**
	 * Shows the favorites dropdown on the recipe card
	 */
	showDropdown() {
		console.log('showing dropdown');
		this.dropdown = true;
		let dropdownContent = this.shadow.querySelector('.dropdown-content');
		dropdownContent.style.display = 'block';
	}

	/**
	 * Hides the favorites dropdown on the recipe card
	 */
	hideDropdown() {
		console.log('hiding dropdown');
		this.dropdown = false;
		let dropdownContent = this.shadow.querySelector('.dropdown-content');
		dropdownContent.style.display = 'none';
	}

	/**
	 * Add the recipe to all checked lists in the dropdown
	 */
	addToCheckedLists() {
		let containers = this.shadow.querySelectorAll('.container');
		for(let i = 0; i < containers.length; i++){
			let checkmark = containers[i].querySelector('input');
			if(checkmark.checked) {
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
		if (userInput != '') {
			console.log(userInput);
			addRecipebyList(userInput, this.getAttribute('recipe-id'));
		}
	}

	connectedCallback() {
		// If the favorite icon is clicked, favorite the item
		let recipeCard = this;
		let favoriteIcon = this.shadow.querySelector('.recipe-favorite');
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');
		let submitFavorites = this.shadow.querySelector('.submit');
		let dropdownContent = this.shadow.querySelector('.dropdown-content');

		/* Click on recipe card changes page or selects card */
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
				window.location.href = 'recipe.html?id=' + this.getAttribute('recipe-id');
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
				this.isFavorite = false;
				removeRecipe(this.getAttribute('recipe-id'));
				console.log(containers.length);
				for(let i = 0; i < containers.length; i++){
					console.log(containers[i].textContent)
					removeRecipebyList(containers[i].textContent,this.getAttribute('recipe-id'));
				}
				favoriteIcon.src = '../assets/favorite.svg';
				console.log('Remove item from ALL favorites lists here');
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

		/* Remove button event listener */
		favoriteRemove.addEventListener('click', (event) => {
			event.stopPropagation();
			console.log('Removing recipe from THIS list...');
			this.delete();
		});

		/* stops propagation of clicks on dropdown content box to the recipe card
		This prevents changing page when the dropdown menu is clicked.  */
		dropdownContent.addEventListener('click', function(e) {
			e.stopPropagation();
		});

		/* handle hovering off of the dropdown so it hides */
		dropdownContent.addEventListener('mouseleave', function() {
			recipeCard.hideDropdown();
		});

		//submit button for favorites dropdown
		submitFavorites.addEventListener('click', (event) => {
			//TODO: need to check the values that are clicked
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
