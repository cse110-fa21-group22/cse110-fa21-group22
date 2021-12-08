/**
 * Imagecard web component
 * @module ImageCard
 */

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
  </section>
`;

const entryElementTemplate = document.createElement('template');
entryElementTemplate.innerHTML = `
  <article class="ingredient-card">
    <img class="ingredient-image" src="http://placekitten.com/200/300" alt="ingredient-image"/>
    <p class="ingredient-name">Pineapple Sliced</p>
    <p class="ingredient-measurements"></p>
  </article>
`;

// This function takes in a number and return it in fraction form and as a string
// If it can't do this, the value is returned as a string rounded to 2 decimal places
function toFraction(value) {
  if (value % 1 === 0) {
    return value.toString();
  }

  const denominators = [2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 32, 64];
  for (const denominator of denominators) {
    let str = '';
    if (Math.floor(value)) str += Math.floor(value);
    if ((value * denominator) % 1 < 0.0001) {
      const numerator = (value % 1) * denominator;
      return `${str} ${numerator}/${denominator}`;
    }

    if ((value * denominator) % 1 > 0.9999) {
      const numerator = ((value % 1) + 1) * denominator;
      return `${str} ${numerator}/${denominator}`;
    }
  }
  return value.toFixed(2);
}

// Taken from https://flexiple.com/javascript-capitalize-first-letter/
function capitalize(str) {
  // split the above string into an array of strings
  // whenever a blank space is encountered
  const arr = str.split(' ');

  // loop through each element of the array and capitalize the first letter.
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  // Join all the elements of the array back into a string
  // using a blankspace as a separator
  const str2 = arr.join(' ');
  return str2;
}

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
    for (let i = 0; i < ingredientArr.length; i += 1) {
      const entry = entryElementTemplate.content.cloneNode(true);
      entry.querySelector('.ingredient-card').id = i;
      entry.querySelector('.ingredient-image').src = `https://spoonacular.com/cdn/ingredients_100x100/${ingredientArr[i].image}`;
      entry.querySelector('.ingredient-name').innerHTML = capitalize(ingredientArr[i].name);
      entry.querySelector('.ingredient-measurements').innerHTML = `${toFraction(ingredientArr[i].amount)} <span></span>`;
      entry.querySelector('span').innerHTML = ingredientArr[i].unit;

      const ingredientList = this.shadow.querySelector('.ingredients-list');
      ingredientList.appendChild(entry);
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
    for (let i = 0; i < equipmentArr.length; i += 1) {
      const entry = entryElementTemplate.content.cloneNode(true);
      entry.querySelector('.ingredient-card').id = i;
      entry.querySelector('.ingredient-image').src = `https://spoonacular.com/cdn/equipment_100x100/${equipmentArr[i].image}`;
      entry.querySelector('.ingredient-name').innerHTML = capitalize(equipmentArr[i].name);

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
    // const showAllButton = this.shadow.querySelector('.show-all');
    const leftArrow = this.shadow.querySelector('.left-arrow');
    const rightArrow = this.shadow.querySelector('.right-arrow');

    // Show all button functionality (Has to be performed in connectedCallback so that 'this' contains correct value)
    leftArrow.addEventListener('click', () => {
      this.shadow.querySelector('.ingredients-list').scrollLeft -= 300;
    });
    rightArrow.addEventListener('click', () => {
      this.shadow.querySelector('.ingredients-list').scrollLeft += 300;
    });
  }
}

customElements.define('image-card-component', ImageCard);
