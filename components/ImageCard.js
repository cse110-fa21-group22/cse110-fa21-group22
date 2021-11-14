const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/imagecard.css';

const imageCardTemplate = document.createElement('template');
imageCardTemplate.innerHTML = `
  <section>
    <article class="ingredient-card">
      <img class="ingredient-image" src="http://placekitten.com/200/300" alt="ingredient-image"/>
      <p class="ingredient-measurements"> 1 <span>Cup</span></p>
    </article>
  </section>
`



class ImageCard extends HTMLElement {
  set ingredients(ingredientObj) {
    let ingredientArr = [];

  }

  set equipment(equipmentObj) {

  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(imageCardTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() {

  }
}

customElements.define('image-card-component', ImageCard);