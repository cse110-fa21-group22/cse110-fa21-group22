/**
 * API key for connecting with Spoonatular API
 */

// eslint-disable-next-line no-unused-vars
import { addRecipe, initLocalStorage, removeRecipe, createList, removeList, addRecipebyList, removeRecipebyList } from '../components/UserLocalStorage.js';
import apiKey from './apikey.js';

const tokenKey = `?apiKey=${apiKey}`;
const storage = window.localStorage;

const steppingSize = 10; // Stepping-size number of recipes to append to end after user scrolls to bottom
const recipeData = {}; // Data in each stepping size?
const recipeSection = document.querySelector('.home-page-popular-recipe-list'); // Where to place recipe cards
const userFavoriteSection = document.querySelector('.home-page-favorite-section');

/**
 * it is possible that the user click the icon and coming back to the main page
 * therefore, only initilize the favorite-master local storage when it does not even exist
 */
function initLocalStorageDoubt() {
  // meaning that favorites-master does not exist
  if (storage.getItem('favorites-master') == null) {
    initLocalStorage();
  }
}

async function fetchRandomRecipes(inputList) {
  return new Promise((resolve, reject) => {
    // use 1 for now, save some points for querying
    // const fetchResults = `https://api.spoonacular.com/recipes/random${tokenKey}&number=${steppingSize}`;
    const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    const tokenNumResults = `&number=${steppingSize}`;
    const tokenRecipeInformation = `&addRecipeInformation=true`;
    const tokenNutritionBool = `&addRecipeNutrition=true`;
    const tokenSort = `&sort=random`;
    let fetchResults = searchUrl + tokenKey;
    console.log('fetchRandomRecipes ', inputList);
    if (inputList.cuisineFilter !== '') {
      const tokenCuisine = `&cuisine=${inputList.cuisineFilter}`;
      fetchResults += tokenCuisine;
    }
    if (inputList.dietFilter !== '') {
      const tokenDiet = `&diet=${inputList.dietFilter}`;
      fetchResults += tokenDiet;
    }
    if (inputList.timeFilter !== '') {
      const tokenTime = `&maxReadyTime=${inputList.timeFilter}`;
      fetchResults += tokenTime;
    }
    if (inputList.typeFilter !== '') {
      const tokenType = `&type=${inputList.typeFilter}`;
      fetchResults += tokenType;
    }
    fetchResults += tokenSort + tokenRecipeInformation + tokenNutritionBool + tokenNumResults;
    console.log(fetchResults);

    fetch(fetchResults)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < parseInt(steppingSize, 10); i += 1) {
          recipeData[data.results[i].id] = data.results[i];
        }
        resolve();
      })
      .catch((err) => {
        console.log('Error loading the recipe');
        console.log(err);
        reject(err);
      });
  });
}

/**
 * Clear the recipe cards from the recipe section element
 */
function clearResults() {
  while (recipeSection.firstChild) {
    recipeSection.removeChild(recipeSection.firstChild);
  }
}

/**
 * Shows the search results on the page from a JSON array 'results' containing recipe objects
 * @param {object} results
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

async function getRecipebyID(id) {
  const fetchEndPoint = `https://api.spoonacular.com/recipes/${id}/information${tokenKey}&includeNutrition=true`;
  console.log('fetch_endpoint', fetchEndPoint);

  const fetchResults = await fetch(fetchEndPoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Fetch in homepage failed');
      console.error(error);
    });

  console.log('result is: ', fetchResults);
  return fetchResults;
}

/**
 * clear out recipeData
 */
function clearObject() {
  for (const member in recipeData) delete recipeData[member];
}

async function showFavoriteSection() {
  const list = storage.getItem('favorites-master');
  const array = JSON.parse(list);

  for (let i = 0; i < array.length; i += 1) {
    const recipeCard = document.createElement('recipe-card-component');
    // eslint-disable-next-line no-await-in-loop
    recipeCard.recipe = await getRecipebyID(array[i]);
    userFavoriteSection.appendChild(recipeCard);
  }
}

async function init() {
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

  const inputList = [];
  inputList.cuisineFilter = '';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';

  // initializing the page
  try {
    await fetchRandomRecipes(inputList);
  } catch (err) {
    console.log(`Error fetching recipes: ${err}`);
    return;
  }

  /**
   * design:
   * display 10 cards each time, when user a card, display another 10 random
   */
  showResults(recipeData);
  showFavoriteSection();

  const sidebarContent = document.querySelector('navbar-component').shadow.querySelector('.sidebar-content');
  const applyButton = sidebarContent.querySelector('.apply-filter');
  applyButton.addEventListener('click', () => {
    const checkboxesCuisine = sidebarContent.querySelectorAll('.cuisine');
    const checkboxesDiet = sidebarContent.querySelectorAll('.diet');
    const checkboxesTime = sidebarContent.querySelectorAll('.time');
    const checkboxesType = sidebarContent.querySelectorAll('.typeOfMeal');
    let cuisineFilter = '';
    let dietFilter = '';
    let timeFilter = '';
    let typeFilter = '';
    for (let i = 0; i < checkboxesCuisine.length; i += 1) {
      const item = checkboxesCuisine[i];
      if (item.checked) {
        cuisineFilter = `${cuisineFilter + item.id},`;
      }
    }
    for (let i = 0; i < checkboxesDiet.length; i += 1) {
      const item = checkboxesDiet[i];
      if (item.checked) {
        dietFilter = `${dietFilter + item.id},`;
      }
    }
    for (let i = 0; i < checkboxesTime.length; i += 1) {
      const item = checkboxesTime[i];
      if (item.checked) {
        timeFilter = Math.max(timeFilter, item.id);
      }
    }
    for (let i = 0; i < checkboxesType.length; i += 1) {
      const item = checkboxesType[i];
      if (item.checked) {
        typeFilter = `${typeFilter + item.id},`;
      }
    }
    if (cuisineFilter.length !== 0) cuisineFilter = cuisineFilter.substring(0, cuisineFilter.length - 1);
    if (dietFilter.length !== 0) dietFilter = dietFilter.substring(0, dietFilter.length - 1);
    if (typeFilter.length !== 0) typeFilter = typeFilter.substring(0, typeFilter.length - 1);
    inputList.cuisineFilter = cuisineFilter;
    inputList.dietFilter = dietFilter;
    inputList.timeFilter = timeFilter;
    inputList.typeFilter = typeFilter;
    clearObject();
    console.log(recipeData);
    fetchRandomRecipes(inputList).then(showResults(recipeData));
    console.log(recipeData);
  });

  const button = document.querySelector('.home-page-popular-refresh');
  // eslint-disable-next-line func-names
  button.addEventListener('click', async function () {
    clearObject();
    try {
      await fetchRandomRecipes(inputList);
    } catch (err) {
      console.log(`Error fetching recipes: ${err}`);
      return;
    }
    showResults(recipeData);
  });
}
window.addEventListener('DOMContentLoaded', init);
