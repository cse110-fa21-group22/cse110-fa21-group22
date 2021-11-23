/**
 * API key for connecting with Spoonatular API
 */

// eslint-disable-next-line import/no-unresolved
import apiKey from './apikey.js';
import { initLocalStorage } from '../components/UserLocalStorage.js';

const tokenKey = `?apiKey=${apiKey}`;
const storage = window.localStorage;

const steppingSize = 10; // Stepping-size number of recipes to append to end after user scrolls to bottom
let recipeData = {}; // Data in each stepping size?
const recipeSection = document.querySelector('.home-page-popular-recipe-list'); // Where to place recipe cards
const userFavoriteSection = document.querySelector('.home-page-favorite-section');

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
  // console.log(results);

  // Clear the results before searching
  clearResults();

  // Add the recipes to the page
  for (const recipe in results) {
    const recipeCard = document.createElement('recipe-card-component');
    recipeCard.recipe = results[recipe];
    recipeSection.appendChild(recipeCard);
  }
}
/**
 * it is possible that the user click the icon and coming back to the main page
 * therefore, only initilize the favorite-master local storage when it does not even exist
 */
function initLocalStorageDoubt() {
  // meaning that favorites-master does not exist
  if (storage.getItem('favorites-master') === null) {
    initLocalStorage();
  }
}

async function getRecipebyID(id) {
  const fetchEndPoint = `https://api.spoonacular.com/recipes/${id}/information${tokenKey}&includeNutrition=false`;

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

async function showFavoriteSection() {
  const list = storage.getItem('favorites-master');
  const array = JSON.parse(list);
  console.log(array);

  for (let i = 0; i < array.length; i += 1) {
    const recipeCard = document.createElement('recipe-card-component');
    recipeCard.recipe = getRecipebyID(array[i]);
    userFavoriteSection.appendChild(recipeCard);
  }
}

async function fetchRandomRecipes() {
  return new Promise((resolve, reject) => {
    // use 1 for now, save some points for querying
    const fetchResults = `https://api.spoonacular.com/recipes/random${tokenKey}&number=${steppingSize}`;
    // console.log(fetchResults);

    fetch(fetchResults)
      .then((response) => response.json())
      .then((data) => {
        // change the 0
        // need to be a for loop and put them into recipeData;
        // console.log(data);
        // console.log(data.recipes[0].id);
        for (let i = 0; i < parseInt(steppingSize, 10); i += 1) {
          recipeData[data.recipes[i].id] = data.recipes[i];

          // // testing for local storage
          // addRecipe(data.recipes[i].id);
          // if(i % 2 === 0){addRecipebyList("list%2", data.recipes[i].id);}
          // if(i % 3 === 0){addRecipebyList("list%3", data.recipes[i].id);}
          // if(i % 4 === 0){addRecipebyList("list%4", data.recipes[i].id);}
          // if(i % 5 === 0){addRecipebyList("list%5", data.recipes[i].id);}
          // if(i % 10 === 0){addRecipebyList("list%10", data.recipes[i].id);}
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

  // console.log('Init.. ');
  // console.log('Fetching recipes...');
  try {
    await fetchRandomRecipes();
  } catch (err) {
    // console.log(`Error fetching recipes: ${err}`);
    return;
  }

  /**
   * design:
   * display 10 cards each time, when user a card, display another 10 random
   */
  // console.log(recipeData);
  showResults(recipeData);

  const button = document.querySelector('.home-page-popular-refresh');
  button.addEventListener('click', async () => {
    recipeData = {};
    try {
      await fetchRandomRecipes();
    } catch (err) {
      console.log(`Error fetching recipes: ${err}`);
      return;
    }
    showResults(recipeData);
  });

  // populating local storage testing
  // var list = storage.getItem('favorites-master');
  // createList("list%2");
  // createList("list%3");
  // createList("list%4");
  // createList("list%5");
  // createList("list%10");

  // return null if not found
  // let a = storage.getItem("dsf");
  // console.log(a);

  showFavoriteSection();
}

window.addEventListener('DOMContentLoaded', init);
