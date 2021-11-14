const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = '../styles/recipeCard.css'; 

const recipeCardTemplate = document.createElement('template');
recipeCardTemplate.innerHTML = `
  <article class="recipe-card">
    <img class="recipe-favorite" src="../assets/favorite.svg" alt="favorite" />
      <img class="recipe-image"><img/>
    <div class="recipe-subdescription">
      <p class="recipe-name">Lorem ipsum dolor sit amet </p>
      <p class="recipe-calories"><span class="recipe-calories-number">500</span> calories</p>
    </div>
  </article>
`

class RecipeCard extends HTMLElement {

  set recipe(recipeObj) { 
    this.setAttribute('recipe-id', recipeObj['id']);
    const recipeImg = this.shadow.querySelector('.recipe-image');
    const recipeCal = this.shadow.querySelector('.recipe-calorie-number');
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
  }

  connectedCallback() {

    let isFavorite = false;

    // If the recipe card is clicked, move to the recipe page
    this.addEventListener('click', () => {
      window.location.href = 'recipe.html?id=' + this.getAttribute('recipe-id');
    });

    // If the favorite icon is clicked, favorite the item
    let favoriteIcon = this.shadow.querySelector('.recipe-favorite');
    favoriteIcon.addEventListener('click', (event) => {
        // Stop propagation to the parent so you don't go to the recipe page
        event.stopPropagation();
        console.log('clicked favorite icon');
        if (!isFavorite) {
          isFavorite = true;
          favoriteIcon.src = '../assets/favorite-selected.svg';
          // add item to favorites list here
        } else {
          isFavorite = false;
          favoriteIcon.src = '../assets/favorite.svg';
          // remove item from favorites list here
        }
    });

    // Experimental mouse hover for favorites icon
    favoriteIcon.addEventListener('mouseover', function() {
      favoriteIcon.src = '../assets/favorite-selected.svg';
    });
    favoriteIcon.addEventListener('mouseout', function() {
      if (!isFavorite) {
        favoriteIcon.src = '../assets/favorite.svg';
      }
    });
  }
}

customElements.define('recipe-card-component', RecipeCard);
