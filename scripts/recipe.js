/**
 * Handles the recipe page functionality. Recipe page is when the user clicks on a recipe and the actual full page with all information
 * pulls up for it.
 */
import apiKey from './apikey.js';

const tokenKey = `?apiKey=${apiKey}`;

/**
 * Performs a recipe lookup based on the id passed in to the page URL
 * @returns {object} json containing recipe information
 */
function lookup() {
  const regex = 'id=';
  const id = window.location.href.substring(window.location.href.search(regex) + 3, window.location.href.length); // Using regex to grab id from URL
  const fetchEndpointR = `https://api.spoonacular.com/recipes/${id}/information${tokenKey}`;
  const fetchEndpointE = `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json${tokenKey}`;

  const fetchResultsR = fetch(fetchEndpointR)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Recipe fetch in lookup failed');
      console.error(error);
    });

  const fetchResultsE = fetch(fetchEndpointE)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Equipment fetch in lookup failed');
      console.error(error);
    });

  return Promise.all([fetchResultsR, fetchResultsE]);
}

/**
 * Converts a value of minutes into a string that shows hours and minutes
 * @param   {number} time - A time in minutes
 * @returns {string} - A string in the form 'XX hours XX minutes'
 */
function formatTime(time) {
  if (parseInt(time, 10) === 1) return `${time.toString()} minute`;
  if (parseInt(time, 10) < 70) return `${time.toString()} minutes`;
  const hour = Math.floor(time / 60);
  let hrstr = `${hour}`;
  const min = time % 60;
  let minstr = `${min}`;

  if (hour === 1) hrstr += ' hour';
  else hrstr += ' hours';

  if (min === 0) minstr = '';
  else if (min === 1) minstr += ' minute';
  else minstr += ' minutes';

  return `${hrstr} ${minstr}`;
}

/**
 * Initializes the recipe page
 */
async function init() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('../sw.js').then(
        () => {},
        (err) => {
          console.error(err);
        }
      );
    });
  }
  const data = await lookup(); // This might actually be slow, might be better to load concurrently with DOM elements rather than after
  const recipe = data[0];
  const equipment = data[1];

  console.log(recipe);
  console.log(equipment);

  // Set recipe image
  const recipeImg = document.querySelector('.recipe-image');
  recipeImg.src = recipe.image;

  // Set recipe title
  const recipeName = document.querySelector('.recipe-name');
  recipeName.innerHTML = `${recipe.title}<button class="favorite-heart">
          <img src="../assets/favorite.svg"/>
      </button>
      <div class="dropdown-content">
       <label class="container">My Favorites
       <input type="checkbox">
       <span class="checkmark"> </span>
       </label>
       <label class="entry">Create a new list: 
           <input type="text">
       </label>
     
       <button class="submit">Submit </button>
     </div>`;

  // show the drop-down box and change the heart color
  let isFavorite = false; // TODO: Need to search if the recipe is favorite
  const favoriteIcon = document.querySelector('.favorite-heart');
  favoriteIcon.addEventListener('click', () => {
    console.log('favoriteIcon clicked');
    if (!isFavorite) {
      console.log('show dropdown');
      isFavorite = true;
      favoriteIcon.src = '../assets/favorite-selected.svg';
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = 'block';
    } else {
      console.log('hide dropdown');
      isFavorite = false;
      favoriteIcon.src = '../assets/favorite.svg';
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    }
  });

  // Set prep time
  const prepTime = document.querySelector('#prep-time');
  const time = recipe.readyInMinutes;
  const timestr = formatTime(time);
  prepTime.innerHTML = timestr;

  // Set serving size
  const servingSize = document.querySelector('#serving-size');
  servingSize.innerHTML = recipe.servings;

  // Set description
  const recipeDescription = document.querySelector('.recipe-page-description');
  recipeDescription.innerHTML = recipe.summary;

  // Set ingredients using custom element
  const recipeIngredients = document.createElement('image-card-component');
  recipeIngredients.ingredients = recipe.extendedIngredients;
  document.querySelector('.ingredients-equipment').appendChild(recipeIngredients);

  // Set equipment using custom element
  const recipeEquipment = document.createElement('image-card-component');
  recipeEquipment.equipment = equipment.equipment;
  document.querySelector('.ingredients-equipment').appendChild(recipeEquipment);

  // Set instructions by getting the analyzedInstructions object
  const recipeSteps = document.querySelector('.recipe-steps');
  const instructionsList = recipe.analyzedInstructions[0].steps;
  for (const instructionNumber in instructionsList) {
    const currStep = document.createElement('li');
    currStep.innerText = instructionsList[instructionNumber].step;
    recipeSteps.appendChild(currStep);
  }
}

window.addEventListener('DOMContentLoaded', init);
