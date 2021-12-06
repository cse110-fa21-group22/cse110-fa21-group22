/**
 @module Search
*/

/*
 * Handles all queries related to spoonacular api.
 */
// eslint-disable-next-line import/no-unresolved
import apiKey from './apikey.js';

const tokenKey = `?apiKey=${apiKey}`;

/**
 * Performs a text search through spoonacular
 * @param {object} inputList - An object that contain a list of tokens as search filter
 * @param {string} inputList.query - The user input for search
 * @param {int} inputList.number - The number of expected results (between 1 and 100).
 * @param {int} inputList.offset - The number of results to skip (between 0 and 900).
 * @param {string} inputList.sort - The token for sort mode
 * @param {boolean} inputList.recipeNutrition - The token request for nutrition information
 * @param {string} inputList.cuisineFilter - The filter which select the cuisine(s) of the recipes.
 * @param {string} inputList.dietFilter - The filter which select the diet(s) of the recipes.
 * @param {int} inputList.timeFilter - The filter which select the max ready time of the recipes.
 * @param {string} inputList.typeFilter - The filter which select the type of the recipes.
 * @returns {object} - json file containing the results of the spoonacular query
 */
export default async function search(inputList) {
  const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  // The order of the token need to be fixed is something wrong happened.
  const tokenSearchInput = `&query=${inputList.query}`;
  const tokenNumResults = `&number=${inputList.number}`;
  const tokenOffset = `&offset=${inputList.offset}`;
  const tokenSort = `&sort=${inputList.sort}`;
  const tokenNutritionBool = `&addRecipeNutrition=${inputList.recipeNutrition}`;
  let fetchEndpoint = searchUrl + tokenKey + tokenSearchInput;
  if (inputList.cuisineFilter !== '') {
    const tokenCuisine = `&cuisine=${inputList.cuisineFilter}`;
    fetchEndpoint += tokenCuisine;
  }
  if (inputList.dietFilter !== '') {
    const tokenDiet = `&diet=${inputList.dietFilter}`;
    fetchEndpoint += tokenDiet;
  }
  if (inputList.timeFilter !== '') {
    const tokenTime = `&maxReadyTime=${inputList.timeFilter}`;
    fetchEndpoint += tokenTime;
  }
  if (inputList.typeFilter !== '') {
    const tokenType = `&type=${inputList.typeFilter}`;
    fetchEndpoint += tokenType;
  }
  fetchEndpoint += tokenNutritionBool + tokenSort + tokenOffset + tokenNumResults;

  // fetch the data
  const fetchResults = await fetch(fetchEndpoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Fetch in search function failed');
      console.error(error);
    });

  return fetchResults;
}
