const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/imagecard.css';

const imageCardTemplate = document.createElement('template');
imageCardTemplate.innerHTML = `
  <section class="ingredients-section">
    <h3 class='title'></h3>
    <button class="left-arrow"><img src="../assets/leftArrow.svg"/></button>
    <button class="right-arrow"><img src="../assets/rightArrow.svg"/></button>
    <section class="ingredients-list">
    </section>
    <button class="show-all"><img src="../assets/downArrow.svg"/>Show All</button>
  </section>
`

const entryElementTemplate = document.createElement('template');
entryElementTemplate.innerHTML = `
  <article class="ingredient-card">
    <img class="ingredient-image" src="http://placekitten.com/200/300" alt="ingredient-image"/>
    <p class="ingredient-name">Pineapple Sliced</p>
    <p class="ingredient-measurements"> 1 <span>Cup</span></p>
  </article>
`;



class ImageCard extends HTMLElement {
  set ingredients(ingredientObj) {
    this.shadow.querySelector('.title').innerHTML = 'Ingredients <button class="instructions-link">Go to Instructions</button>'; 
    let ingredientArr = [];

  }

  set equipment(equipmentObj) {
    this.shadow.querySelector('.title').innerHTML = 'Equipment '; 

  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(imageCardTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() {

  }
}

customElements.define('image-card-component', ImageCard);