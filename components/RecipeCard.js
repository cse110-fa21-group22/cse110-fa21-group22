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
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(recipeCardTemplate.content.cloneNode(true));
		this.shadow.appendChild(link.cloneNode(true));
		this.selectMode = false;
		this.selected = false;
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
		let checkmark = this.shadow.querySelector('.recipe-checkmark');
		checkmark.style.display = 'none';
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');
		favoriteRemove.style.display = 'none';
		this.style.filter = 'brightness(100%)';
	}

	connectedCallback() {
		let isFavorite = false;
		// If the recipe card is clicked, move to the recipe page
		this.addEventListener('click', () => {
			// Check to see if selecting is allowable (only in edit/move mode)
			if (this.selectMode) {
				// handle toggling state for the checkmark/selected property
				let checkmark = this.shadow.querySelector('.recipe-checkmark');
				if (this.isSelected) {
					this.isSelected = false;
					checkmark.style.display = 'none';
					this.style.filter = 'brightness(100%)';
				} else {
					this.isSelected = true;
					checkmark.style.display = 'block';
					this.style.filter = 'brightness(90%)';
				}
			} else {
				console.log('transferring page');
				window.location.href = 'recipe.html?id=' + this.getAttribute('recipe-id');
			}
		});

		// If the favorite icon is clicked, favorite the item
		let favoriteIcon = this.shadow.querySelector('.recipe-favorite');
		let favoriteRemove = this.shadow.querySelector('.recipe-remove');

		favoriteIcon.addEventListener('click', (event) => {
			// Stop propagation to the parent so you don't go to the recipe page
			event.stopPropagation();
			if (!isFavorite) {
				isFavorite = true;
				favoriteIcon.src = '../assets/favorite-selected.svg';
				// add item to favorites list here
				console.log('Prompting user to add to favorites lists');
			} else {
				isFavorite = false;
				favoriteIcon.src = '../assets/favorite.svg';
				// remove item from favorites list here
				console.log('Removing item from ALL lists');
			}
		});

		// Mouse hover for favorites icon
		favoriteIcon.addEventListener('mouseover', () => {
			favoriteIcon.src = '../assets/favorite-selected.svg';
		});

		favoriteIcon.addEventListener('mouseout', () => {
			if (!isFavorite) {
				favoriteIcon.src = '../assets/favorite.svg';
			}
		});

		favoriteRemove.addEventListener('click', (event) => {
			event.stopPropagation();
			console.log('Removing recipe from THIS list...');
			// Remove recipe from favorites list
		});

		
	}
}

customElements.define('recipe-card-component', RecipeCard);
