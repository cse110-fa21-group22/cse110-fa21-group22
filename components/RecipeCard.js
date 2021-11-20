import { addRecipe, addRecipebyList, createList, checkFavorite } from "./UserLocalStorage.js";


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
			<div class="checkbox-container">

			</div>

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

class RecipeCard extends HTMLElement {
	set recipe(recipeObj) {
		this.setAttribute('recipe-id', recipeObj['id']);
		const recipeImg = this.shadow.querySelector('.recipe-image');
		// const recipeCal = this.shadow.querySelector('.recipe-calorie-number');
		const recipeName = this.shadow.querySelector('.recipe-name');

		recipeImg.src = recipeObj['image'];
		recipeName.innerHTML = recipeObj['title'];
		// recipeCal.innerHTML = recipeObj['calories'];
		this.initializeHearts();
	}

	initializeHearts() {
		console.log("Checking favorites");
		let favoriteIcon = this.shadow.querySelector('.recipe-favorite');
		this.isFavorite = checkFavorite(this.getAttribute('recipe-id'));
		if (this.isFavorite) {
			favoriteIcon.src = '../assets/favorite-selected.svg';
		} else {
			favoriteIcon.src = '../assets/favorite.svg';
		}
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(recipeCardTemplate.content.cloneNode(true));
		this.shadow.appendChild(link.cloneNode(true));
		this.selectMode = false;
		this.selected = false;
		this.isFavorite = false;
	}

	/**
	 * Sets up the recipe card to enter selection mode
	 * Must be called when entering selection mode
	 */
	enterSelectMode() {
		this.selectMode = true;
		this.selected = true;
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');
		favoriteRemove.style.display = 'block';
	}

	/**
	 * Brings the recipe card out of selection mode
	 * Must be called when exiting selection mode or the UI might not be reset
	 */
	exitSelectMode() {
		this.selectMode = false;
		this.selected = false;
		this.deselect();
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
	}

	/**
	 * Deselects the recipe by removing the checkmark
	 */
	deselect() {
		this.isSelected = false;
		checkmark.style.display = 'none';
		this.style.filter = 'brightness(100%)';
	}

	/**
	 * Shows the favorites dropdown on the recipe card
	 */
	showDropdown() {
		console.log('showing dropdown');
		let dropdownContent = this.shadow.querySelector('.dropdown-content');
		dropdownContent.style.display = 'block';
	}

	/**
	 * Hides the favorites dropdown on the recipe card
	 */
	hideDropdown() {
		console.log('hiding dropdown');
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
				addRecipebyList(containers[i].textContent,this.getAttribute('recipe-id'))
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
			createList(userInput);
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

		/* automatically populate the checkbox section */
		/* HTML generated appears as follows

		<label class="container">
		<input type="checkbox">
		<span class="checkmark"></span>
		</label>

		*/
		let checkboxContainer = this.shadow.querySelector('.checkbox-container');
		for (let i = 0; i < window.localStorage.length; i++) {
			let listName = window.localStorage.key(i)//JSON.parse(window.localStorage.getItem());
			if (listName == 'favorites-master') {
				continue;
			}
			let labelElem = document.createElement('label');
			let inputElem = document.createElement('input');
			let spanElem = document.createElement('span');
			labelElem.innerText = listName;
			inputElem.setAttribute('type', 'checkbox');
			labelElem.classList.add('container');
			spanElem.classList.add('checkmark');
			labelElem.appendChild(inputElem);
			labelElem.appendChild(spanElem);
			checkboxContainer.appendChild(labelElem);
		}

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
			} else {
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
			// Remove recipe from favorites list
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
