// import { addRecipe, addRecipebyList, checkFavorite, removeRecipe, removeRecipebyList } from './UserLocalStorage.js';

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
 * Initialize the heart color
 * @param {boolean} isFavorite - check if in local storage
 */
function initializeHearts(isFavorite) {
  // console.log('Checking favorites');
  const favoriteIcon = document.querySelector('.favorite-heart');
  if (isFavorite) {
    favoriteIcon.src = '../assets/favorite-selected.svg';
  } else {
    favoriteIcon.src = '../assets/favorite.svg';
  }
}

/**
 * Shows the favorites dropdown on the recipe card
 * The position will be the title length
 * @param {Object} recipe - recipe card
 */
function showDropdown(recipe) {
  // this.dropdown = true;
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'block';
  const pos = recipe.title.length * 17;
  dropdownContent.style.marginLeft = `${pos}px`;
}

/**
 * Hides the favorites dropdown on the recipe card
 */
function hideDropdown() {
  // this.dropdown = false;
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
}

/**
 * Fetches from localstorage whether the recipe is already favorited or not
 * @param {Object} recipeID
 * @returns - check recipe-id if in the favorite-master list
 */
function checkFavorite(recipeID) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i], 10) === parseInt(recipeID, 10)) {
      return true;
    }
  }
  return false;
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
  recipeName.innerHTML = `${recipe.title}
      <img class="favorite-heart" src="../assets/favorite.svg"/ alt="favorite">
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
  /*
   * show the drop-down box and change the heart color
   */
  let isFavorite = checkFavorite(recipe.id);
  initializeHearts(isFavorite);
  const favoriteIcon = document.querySelector('.favorite-heart');
  const submitFavorites = document.querySelector('.submit');
  const dropdownContent = document.querySelector('.dropdown-content');
  favoriteIcon.addEventListener('click', () => {
    if (!isFavorite) {
      isFavorite = true;
      // favoriteIcon.src = '../assets/favorite-selected.svg';
      showDropdown(recipe);
    } else {
      isFavorite = false;
      // favoriteIcon.src = '../assets/favorite.svg';
      hideDropdown();
    }
  });

  /* Mouse hover for favorite icon */
  favoriteIcon.addEventListener('mouseover', () => {
    favoriteIcon.src = '../assets/favorite-selected.svg';
  });

  favoriteIcon.addEventListener('mouseout', () => {
    if (!isFavorite) {
      favoriteIcon.src = '../assets/favorite.svg';
    }
  });

  /* handle hovering off of the dropdown so it hides */
  dropdownContent.addEventListener('mouseleave', () => {
    hideDropdown();
  });

  submitFavorites.addEventListener('click', () => {
    // TODO: need to check the values that are clicked
    if (!isFavorite) {
      // TODO: add to custom list
      location.reload();
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
  let stepNum = 1;
  for (const instructionNumber in instructionsList) {
    const currStep = document.createElement('li');
    currStep.innerText = instructionsList[instructionNumber].step;
    currStep.className = 'normal-step';
    currStep.id = `step${stepNum}`;
    recipeSteps.appendChild(currStep);
    if (instructionsList[parseInt(instructionNumber, 10) + 1] != null) {
      const nextButton = document.createElement('button');
      nextButton.innerHTML = `Next`;
      nextButton.className = 'nextStep';
      nextButton.id = `button${stepNum}`;
      const style = window.getComputedStyle(currStep, null);
      const stepHeight = Math.ceil(Number(style.height.replace('px', '')) / Number(style.lineHeight.replace('px', '')));
      console.log(stepHeight);
      // eslint-disable-next-line camelcase
      const margin_top = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 20;
      console.log(margin_top);
      // eslint-disable-next-line camelcase
      nextButton.style.marginTop = `${margin_top}px`;
      nextButton.style.marginLeft = `${90}vw`;
      recipeSteps.appendChild(nextButton);
    } else {
      const backButton = document.createElement('button');
      backButton.innerHTML = `Back to first step`;
      backButton.className = 'backButton';
      backButton.id = `backButton`;
      backButton.style.display = 'none';
      backButton.style.marginLeft = `${90}vw`;
      recipeSteps.appendChild(backButton);
    }
    stepNum += 1;
  }

  // Initialize the first step to current step
  const firstStep = document.querySelector('#step1');
  const firstButton = document.querySelector('#button1');
  firstStep.className = 'current-step';
  firstButton.style.display = 'block';

  // When the button is pressed, highlight the next step and normalize the current step
  for (let currStepNum = 1; currStepNum < parseInt(stepNum, 10) - 1; currStepNum += 1) {
    const currButton = document.querySelector(`#button${currStepNum}`);
    if (currStepNum !== parseInt(stepNum, 10) - 2) {
      currButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextButton = document.querySelector(`#button${nextStepNum}`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currButton.style.display = 'none';
        nextButton.style.display = 'block';
      });
    } else {
      currButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextButton = document.querySelector(`#backButton`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currButton.style.display = 'none';
        nextButton.style.display = 'block';
      });
    }
  }

  // The event listener for the last back button
  const backButton = document.querySelector(`#backButton`);
  backButton.addEventListener('click', () => {
    const currStep = document.querySelector(`#step${parseInt(stepNum, 10) - 1}`);
    currStep.className = 'normal-step';
    firstStep.className = 'current-step';
    firstButton.style.display = 'block';
    backButton.style.display = 'none';
  });
}

window.addEventListener('DOMContentLoaded', init);
