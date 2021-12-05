/**
 * Handles home page functionality.
 */

import { initLocalStorage } from '../components/UserLocalStorage.js';
import search from './search.js';

const storage = window.localStorage;

const recipeSection = document.querySelector('.home-page-popular-recipe-list');
const userFavoriteSection = document.querySelector('.home-page-favorite-section');

/**
 * it is possible that the user click the icon and coming back to the main page
 * therefore, only initilize the favorite-master local storage when it does not even exist
 */
function initLocalStorageDoubt() {
  // Meaning that favorites-master does not exist
  if (storage.getItem('favorites-master') == null) {
    initLocalStorage();
  }
}

/**
 * This function clears the results on the search page
 */
function clearResults() {
  while (recipeSection.firstChild) {
    recipeSection.removeChild(recipeSection.firstChild);
  }
  while (userFavoriteSection.firstChild) {
    userFavoriteSection.removeChild(userFavoriteSection.firstChild);
  }
}

/**
 * Shows the search results on the page
 * @param {Object} results The search results
 * @returns {none}
 */
function showResults(results) {
  // Clear the results before searching
  clearResults();
  // Add the recipes to the page
  for (const recipe in results) {
    const recipeCard = document.createElement('recipe-card-component');
    recipeCard.recipe = results[recipe];
    recipeSection.appendChild(recipeCard);
  }
}

function showFavoriteSection() {
  const list = storage.getItem('favorites-master');
  const array = JSON.parse(list);
  if (array.length === 0) {
    const noFavorite = document.createElement('h4');
    noFavorite.innerText = 'No Favorites Added Yet';
    userFavoriteSection.appendChild(noFavorite);
  } else {
    for (let i = 0; i < array.length; i += 1) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = array[i];
      userFavoriteSection.appendChild(recipeCard);
    }
  }
}

function init() {
  initLocalStorageDoubt();
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

  // Disable the sidebar button
  const sidebarButton = document.querySelector('navbar-component').shadow.querySelector('.sidebar-button');
  sidebarButton.style.display = 'none';
  // Hide the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');
  sidebarContent.style.display = 'none';

  const inputList = {};
  inputList.query = '';
  inputList.number = 10;
  inputList.offset = 0;
  inputList.sort = 'random';
  inputList.recipeInformation = 'true';
  inputList.recipeNutrition = 'true';
  inputList.fillIngredients = 'true';
  inputList.cuisineFilter = '';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';
  search(inputList).then((value) => {
    showResults(value.results);
    showFavoriteSection();
  });

  const button = document.querySelector('.home-page-popular-refresh');
  // eslint-disable-next-line func-names
  button.addEventListener('click', async function () {
    inputList.query = '';
    inputList.number = 10;
    inputList.offset = 0;
    inputList.sort = 'random';
    inputList.recipeNutrition = 'true';
    inputList.cuisineFilter = '';
    inputList.dietFilter = '';
    inputList.timeFilter = '';
    inputList.typeFilter = '';
    search(inputList).then((value) => {
      showResults(value.results);
      showFavoriteSection();
    });
  });
}

window.addEventListener('DOMContentLoaded', init);
