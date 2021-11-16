const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/imagecard.css';


/**
 * TODO (Not a priority) The class names for each template still refer to every entry as 'ingredient'
 * Currently works as is and reworking this will not change any functionality. It would only be for code readability. 
 */
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
    <p class="ingredient-measurements"></p>
  </article>
`;

let showingAll = false;

class ImageCard extends HTMLElement {
  set ingredients(ingredientArr) {
    if (this.equipment) {
      console.err('Already set as equipment'); // Check if card has already been set
      return;
    }

    // Set title to 'Ingredients'
    const title = this.shadow.querySelector('.title');
    title.innerHTML = 'Ingredients <button class="instructions-link" hidden>Go to Instructions</button>'; 

    // Create an ingredient entry for each element of ingredientsArr
    for (let i = 0; i < ingredientArr.length; i++) { 
      const entry = entryElementTemplate.content.cloneNode(true);
      entry.querySelector('.ingredient-card').id = i;
      if (i > 3) entry.querySelector('.ingredient-card').classList.add('hidden'); // Hide if there's more than 4 entries
      entry.querySelector('.ingredient-image').src = 'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientArr[i].image;
      entry.querySelector('.ingredient-name').innerHTML = ingredientArr[i].name;
      entry.querySelector('.ingredient-measurements').innerHTML = ingredientArr[i].amount + ' <span></span>';
      entry.querySelector('span').innerHTML = ingredientArr[i].unit;


      this.shadow.querySelector('.ingredients-list').appendChild(entry);
    }

  }

  set equipment(equipmentArr) {
    if (this.equipment) {
      console.err('Already set as ingredients'); // Check if card has already been set
      return;
    }

    // Set title to 'Equipment'
    const title = this.shadow.querySelector('.title');
    title.innerHTML = 'Equipment ';

    // Create an equipment entry for each element of equipmentArr
    for (let i = 0; i < equipmentArr.length; i++) { 
      const entry = entryElementTemplate.content.cloneNode(true);
      entry.querySelector('.ingredient-card').id = i;
      if (i > 3) entry.querySelector('.ingredient-card').classList.add('hidden'); // Hide if there's more than 4 entries
      entry.querySelector('.ingredient-image').src = "https://spoonacular.com/cdn/equipment_100x100/" + equipmentArr[i].image;
      entry.querySelector('.ingredient-name').innerHTML = equipmentArr[i].name;

      this.shadow.querySelector('.ingredients-list').appendChild(entry);
    }

  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(imageCardTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  connectedCallback() {
    const showAllButton = this.shadow.querySelector('.show-all');
    const leftArrow = this.shadow.querySelector('.left-arrow');
    const rightArrow = this.shadow.querySelector('.right-arrow');
    
    // Show all button functionality (Has to be performed in connectedCallback so that 'this' contains correct value)
    showAllButton.addEventListener('click', () => {
      const ingredientsList = this.shadow.querySelector('.ingredients-list');
      for (const entry of ingredientsList.children) {
        if (showingAll) {
          if (entry.id >= 4) entry.classList.add('hidden');
        } else {
          entry.classList.remove('hidden');
        }  
      }
      showingAll = !showingAll;
    });
    leftArrow.addEventListener('click', () => {
      // this.shadow.querySelector('.ingredients-list').scrollLeft -= 300;
    });
    rightArrow.addEventListener('click', () => {
      // this.shadow.querySelector('.ingredients-list').scrollLeft += 300;
    });
  }
}

// TODO This function should take in a value and return it in fraction form and as a string 
function toFraction(value) {
  return value.toString();
}

/** 
 * TODO This function should standardize measurements to a single way of being displayed
 * Example: If the input is 'Tablespoon' or 'Tbsp' or 'tablespoon' this function should 
 * consistently return a value of 'Tbsp'
 */
function standardizeMeasurement(str) {
  return str;
}

customElements.define('image-card-component', ImageCard);