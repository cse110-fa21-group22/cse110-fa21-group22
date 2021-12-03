/**
 * Handles the recipe page functionality. Recipe page is when the user clicks on a recipe and the actual full page with all information
 * pulls up for it.
 */
import { addRecipe, addRecipebyList, checkFavorite, removeRecipebyList } from '../components/UserLocalStorage.js';
import apiKey from './apikey.js';

const tokenKey = `?apiKey=${apiKey}`;

// TODO:Need to use search in search.js
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

const listEntryTemplate = document.createElement('template');
listEntryTemplate.innerHTML = `
  <label class="container">
	  <span>My Favorites</span>
	  <input type="checkbox">
	  <span class="checkmark"> </span>
  </label>
`;

/**
 * Initialize the dropdown content
 */
function initializeDropdown() {
  const dropdownElem = document.querySelector('.dropdown-content');
  for (let i = 0; i < localStorage.length; i += 1) {
    const entry = listEntryTemplate.content.cloneNode(true);
    if (localStorage.key(i) === 'favorites-master') continue;
    else if (localStorage.key(i) === 'My Favorites') entry.querySelector('input').checked = true;
    else entry.querySelector('.container').innerHTML = entry.querySelector('.container').innerHTML.replace('My Favorites', localStorage.key(i));
    dropdownElem.insertBefore(entry, dropdownElem.firstChild);
  }
}

/**
 * Shows the favorites dropdown on the recipe card
 * The position will be the title length
 * @param {Object} recipe - recipe card
 */
function showDropdown(recipe, isMobile) {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'block';
  if (!isMobile) {
    const pos = recipe.title.length * 17;
    dropdownContent.style.marginLeft = `${pos}px`;
  }
}

/**
 * Hides the favorites dropdown on the recipe card
 */
function hideDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
}

/**
 * Add the recipe to all checked lists in the dropdown
 */
function addToCheckedLists(recipe) {
  const containers = document.querySelectorAll('.container');
  for (let i = 0; i < containers.length; i += 1) {
    const checkmark = containers[i].querySelector('input');
    if (checkmark.checked) {
      addRecipebyList(containers[i].querySelector('span').innerHTML, recipe.id);
    }
  }
}

/**
 * Adds the recipe to a custom list
 */
function addToCustomList(recipe) {
  let userInput = document.querySelector('.user-input');
  userInput = userInput.value;
  if (userInput !== '') {
    console.log(userInput);
    addRecipebyList(userInput, recipe.id);
  }
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

  // Detect if the device is mobile or PC
  const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
  // intiallize the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');
  sidebarContent.style.display = 'none';

  const sidebarButton = navbarComponent.shadow.querySelector('.sidebar-button');
  sidebarButton.addEventListener('click', () => {
    if (!isMobile) {
      if (sidebarContent.style.display !== 'none') {
        const mainSection = document.querySelector('.recipe-page');
        mainSection.style.marginLeft = `${225}px`;
      } else {
        const mainSection = document.querySelector('.recipe-page');
        mainSection.style.marginLeft = `${0}px`;
      }
    }
  });

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
        <label class="entry">Create a new list: 
           <input type="text" class="user-input">
        </label>
        <button class="submit">Add to Favorite</button>
     </div>
     <button class="email-recipe">Email Recipe</button>`;
  /*
   * show the drop-down box and change the heart color
   */
  let isFavorite = checkFavorite(recipe.id);
  initializeHearts(isFavorite);
  initializeDropdown();
  const favoriteIcon = document.querySelector('.favorite-heart');
  const submitFavorites = document.querySelector('.submit');
  const dropdownContent = document.querySelector('.dropdown-content');
  favoriteIcon.addEventListener('click', () => {
    if (!isFavorite) {
      favoriteIcon.src = '../assets/favorite-selected.svg';
      showDropdown(recipe, isMobile);
    } else {
      let toRemove = false;
      // eslint-disable-next-line no-restricted-globals
      toRemove = window.confirm(`Unhearting a recipe removes from all favorite lists. To delete only from this list, try edit mode on favorite page. Are you sure you want to continue?`);
      // continues to remove the recipe from list if user confirms they want to remove
      if (toRemove) {
        isFavorite = false;
        const containers = document.querySelectorAll('.container');
        // goes through all the lists and deletes if it is in list
        for (let i = 0; i < containers.length; i += 1) {
          removeRecipebyList(containers[i].querySelector('span').innerHTML, recipe.id);
        }
        favoriteIcon.src = '../assets/favorite.svg';
      }
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
      addRecipe(recipe.id);
      addToCheckedLists(recipe);
      addToCustomList(recipe);
      /* Reload the page as a shortcut for showing new lists */
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
      const prevButton = document.createElement('button');
      prevButton.innerHTML = `Previous`;
      prevButton.className = 'prevStep';
      prevButton.id = `prevButton${stepNum}`;
      const nextButton = document.createElement('button');
      nextButton.innerHTML = `Next`;
      nextButton.className = 'nextStep';
      nextButton.id = `nextButton${stepNum}`;
      if (!isMobile && stepNum === 1) {
        const style = window.getComputedStyle(currStep, null);
        const stepHeight = Math.ceil(Number(style.height.replace('px', '')) / Number(style.lineHeight.replace('px', '')));
        // eslint-disable-next-line camelcase
        const margin_top = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 20;
        // eslint-disable-next-line camelcase
        const margin_top_prev = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 30;
        // eslint-disable-next-line camelcase
        prevButton.style.marginTop = `${margin_top_prev}px`;
        prevButton.style.marginLeft = `${90}vw`;
        prevButton.style.position = 'absolute';
        // eslint-disable-next-line camelcase
        nextButton.style.marginTop = `${margin_top}px`;
        nextButton.style.marginLeft = `${90}vw`;
        nextButton.style.position = 'absolute';
      } else if (!isMobile && stepNum !== 1) {
        const style = window.getComputedStyle(currStep, null);
        const stepHeight = Math.ceil(Number(style.height.replace('px', '')) / Number(style.lineHeight.replace('px', '')));
        // eslint-disable-next-line camelcase
        const margin_top = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 5;
        // eslint-disable-next-line camelcase
        const margin_top_prev = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 30;
        // eslint-disable-next-line camelcase
        prevButton.style.marginTop = `${margin_top_prev}px`;
        prevButton.style.marginLeft = `${90}vw`;
        prevButton.style.position = 'absolute';
        // eslint-disable-next-line camelcase
        nextButton.style.marginTop = `${margin_top}px`;
        nextButton.style.marginLeft = `${90}vw`;
        nextButton.style.position = 'absolute';
      }
      recipeSteps.appendChild(prevButton);
      recipeSteps.appendChild(nextButton);
    } else {
      const prevButton = document.createElement('button');
      prevButton.innerHTML = `Previous`;
      prevButton.className = 'prevStep';
      prevButton.id = `prevButton${stepNum}`;
      const backButton = document.createElement('button');
      backButton.innerHTML = `Restart`;
      backButton.className = 'backButton';
      backButton.id = `backButton`;
      backButton.style.display = 'none';
      if (!isMobile) {
        const style = window.getComputedStyle(currStep, null);
        const stepHeight = Math.ceil(Number(style.height.replace('px', '')) / Number(style.lineHeight.replace('px', '')));
        // eslint-disable-next-line camelcase
        const margin_top = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 5;
        // eslint-disable-next-line camelcase
        const margin_top_prev = ((parseFloat(stepHeight, 10) * -1) / 2) * 30 - 30;
        backButton.style.marginLeft = `${90}vw`;
        // eslint-disable-next-line camelcase
        backButton.style.marginTop = `${margin_top}px`;
        backButton.style.position = 'absolute';
        // eslint-disable-next-line camelcase
        prevButton.style.marginTop = `${margin_top_prev}px`;
        prevButton.style.marginLeft = `${90}vw`;
        prevButton.style.position = 'absolute';
      }
      recipeSteps.appendChild(prevButton);
      recipeSteps.appendChild(backButton);
    }
    stepNum += 1;
  }

  // Initialize the first step to current step
  const firstStep = document.querySelector('#step1');
  const firstNextButton = document.querySelector('#nextButton1');
  const firstPrevButton = document.querySelector('#prevButton1');
  firstStep.className = 'current-step';
  firstNextButton.style.display = 'block';
  firstPrevButton.style.display = 'none';

  // When the next button is pressed, highlight the next step and normalize the current step
  // When the previous button is pressed, highlight the previous step and normalize the current step
  for (let currStepNum = 1; currStepNum < parseInt(stepNum, 10) - 1; currStepNum += 1) {
    const currNextButton = document.querySelector(`#nextButton${currStepNum}`);
    const currPrevButton = document.querySelector(`#prevButton${currStepNum}`);
    if (currStepNum === 1 && currStepNum !== parseInt(stepNum, 10) - 2) {
      currNextButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextNextButton = document.querySelector(`#nextButton${nextStepNum}`);
        const nextPrevButton = document.querySelector(`#prevButton${nextStepNum}`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        nextNextButton.style.display = 'block';
        nextPrevButton.style.display = 'block';
      });
    } else if (currStepNum === 2 && currStepNum !== parseInt(stepNum, 10) - 2) {
      currNextButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextNextButton = document.querySelector(`#nextButton${nextStepNum}`);
        const nextPrevButton = document.querySelector(`#prevButton${nextStepNum}`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        nextNextButton.style.display = 'block';
        nextPrevButton.style.display = 'block';
      });
      currPrevButton.addEventListener('click', () => {
        const prevStepNum = parseInt(currStepNum, 10) - 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const prevStep = document.querySelector(`#step${prevStepNum}`);
        const prevNextButton = document.querySelector(`#nextButton${prevStepNum}`);
        const prevPrevButton = document.querySelector(`#prevButton${prevStepNum}`);
        currStep.className = 'normal-step';
        prevStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        prevNextButton.style.display = 'block';
        prevPrevButton.style.display = 'none';
      });
    } else if (currStepNum !== 1 && currStepNum !== 2 && currStepNum !== parseInt(stepNum, 10) - 2) {
      currNextButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextNextButton = document.querySelector(`#nextButton${nextStepNum}`);
        const nextPrevButton = document.querySelector(`#prevButton${nextStepNum}`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        nextNextButton.style.display = 'block';
        nextPrevButton.style.display = 'block';
      });
      currPrevButton.addEventListener('click', () => {
        const prevStepNum = parseInt(currStepNum, 10) - 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const prevStep = document.querySelector(`#step${prevStepNum}`);
        const prevNextButton = document.querySelector(`#nextButton${prevStepNum}`);
        const prevPrevButton = document.querySelector(`#prevButton${prevStepNum}`);
        currStep.className = 'normal-step';
        prevStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        prevNextButton.style.display = 'block';
        prevPrevButton.style.display = 'block';
      });
    } else {
      currNextButton.addEventListener('click', () => {
        const nextStepNum = parseInt(currStepNum, 10) + 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const nextStep = document.querySelector(`#step${nextStepNum}`);
        const nextBackButton = document.querySelector(`#backButton`);
        const nextPrevButton = document.querySelector(`#prevButton${nextStepNum}`);
        currStep.className = 'normal-step';
        nextStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        nextBackButton.style.display = 'block';
        nextPrevButton.style.display = 'block';
      });
      currPrevButton.addEventListener('click', () => {
        const prevStepNum = parseInt(currStepNum, 10) - 1;
        const currStep = document.querySelector(`#step${currStepNum}`);
        const prevStep = document.querySelector(`#step${prevStepNum}`);
        const prevNextButton = document.querySelector(`#nextButton${prevStepNum}`);
        const prevPrevButton = document.querySelector(`#prevButton${prevStepNum}`);
        currStep.className = 'normal-step';
        prevStep.className = 'current-step';
        currNextButton.style.display = 'none';
        currPrevButton.style.display = 'none';
        prevNextButton.style.display = 'block';
        prevPrevButton.style.display = 'block';
      });
    }
  }

  // The event listener for the last prev button
  const lastStepNum = parseInt(stepNum, 10) - 1;
  const lastPrevButton = document.querySelector(`#prevButton${lastStepNum}`);
  const backButton = document.querySelector(`#backButton`);
  lastPrevButton.addEventListener('click', () => {
    const prevStepNum = parseInt(lastStepNum, 10) - 1;
    const currStep = document.querySelector(`#step${lastStepNum}`);
    const prevStep = document.querySelector(`#step${prevStepNum}`);
    const prevNextButton = document.querySelector(`#nextButton${prevStepNum}`);
    const prevPrevButton = document.querySelector(`#prevButton${prevStepNum}`);
    currStep.className = 'normal-step';
    prevStep.className = 'current-step';
    lastPrevButton.style.display = 'none';
    backButton.style.display = 'none';
    prevNextButton.style.display = 'block';
    prevPrevButton.style.display = 'block';
  });
  // The event listener for the last back button
  backButton.addEventListener('click', () => {
    const currStep = document.querySelector(`#step${parseInt(stepNum, 10) - 1}`);
    const currPrevButton = document.querySelector(`#prevButton${parseInt(stepNum, 10) - 1}`);
    currStep.className = 'normal-step';
    firstStep.className = 'current-step';
    firstNextButton.style.display = 'block';
    firstPrevButton.style.display = 'none';
    backButton.style.display = 'none';
    currPrevButton.style.display = 'none';
  });

  // Email the link of recipe
  // Receiver is blank and should be entered by user
  // Body of email is a short message with the link to recipe
  const emailButton = document.querySelector('.email-recipe');
  emailButton.addEventListener('click', () => {
    const recipeURL = window.location;
    const subject = `${recipe.title} Recipe`;
    const body = `Here is a yummy recipe I found on ${recipeURL}. Enjoy!`;
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}

window.addEventListener('DOMContentLoaded', init);
