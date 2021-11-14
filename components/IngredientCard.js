const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = '../styles/imageCard.css'; 

const ingredientsCardTemplate = document.createElement('template');
ingredientsCardTemplate.innerHTML = `
  <article class="ingredient-card">
    <img class="ingredient-image" src="http://placekitten.com/200/300" alt="ingredient-image"/>
    <p class="ingredient-amount">1</p><p> </p><p class="ingredient-measurement">cup</p><p> </p>
    <p class="ingredient-name">Pineapple Sliced</p>
  </article>
`

class ingredientsCard extends HTMLElement {
  set ingredients(ingredientObj) { 
    this.setAttribute('ingredents-id', ingredientObj['id']);
    const size = "100x100";
    const ingredientImg = this.shadow.querySelector('.ingredient-image');
    const ingredientName = this.shadow.querySelector('.ingredient-name');
    const ingredientAmount = this.shadow.querySelector('.ingredient-amount');
    const ingredientMeasurement = this.shadow.querySelector('.ingredient-measurement');
  
    ingredientImg.src = "https://spoonacular.com/cdn/ingredients_" + size + "/"+ingredientObj['image'];
    ingredientAmount.innerHTML = ingredientObj['amount'] +" ";
    ingredientMeasurement.innerHTML = ingredientObj['unit'];
    ingredientName.innerHTML = ingredientObj['name'];
  }

    
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(ingredientsCardTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() { 

  }
}

customElements.define('ingredients-card-component', ingredientsCard);