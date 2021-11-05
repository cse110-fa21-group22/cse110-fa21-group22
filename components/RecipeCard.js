const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'styles/recipeCard.css'; 

const recipeCardTemplate = document.createElement('template');
recipeCardTemplate.innerHTML = `
  <article class="recipe-card">
    <img class="recipe-favorite" src="assets/favorite.svg" alt="favorite" />
    <div class="recipe-image">
    <div class="recipe-subdescription">
      <p class="recipe-name">Lorem ipsum dolor sit amet </p>
      <p class="recipe-calories"><spa class="recipe-calories-number">500</span> calories</p>
    </div>
  </article>
`

class RecipeCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.appendChild(link);
    this.shadow.appendChild(recipeCardTemplate.content);
  }
}

customElements.define('recipe-card-component', RecipeCard);