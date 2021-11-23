// eslint-disable-next-line import/no-unresolved
import apiKey from './apikey.js';

const tokenKey = `?apiKey=${apiKey}`;

/**
 * Performs a simple text search through spoonacular
 * @param {object} inputList an object as defined below
 * inputList['query'] is the search phrase as a string
 * inputList['number'] is the number of results as a number
 * inputList['offset'] is the number of results to skip as a number
 * inputList['recipe-nutrition'] is a boolean specifying whether to show nutrition
 * @returns {object} json containing the results of the spoonacular query
 */
export default async function search(inputList) {
  // Create the fetch url
  const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  const tokenSearchInput = `&query=${inputList.query}`;
  const tokenNumResults = `&number=${inputList.number}`;
  const tokenOffset = `&offset=${inputList.offset}`;
  // const tokenNutritionBool = '&addRecipeNutrition=' + inputList['recipe-nutrition'];
  const fetchEndpoint = searchUrl + tokenKey + tokenSearchInput + tokenNumResults + tokenOffset; // + tokenNutritionBool;

  // fetch the data

  const fetchResults = await fetch(fetchEndpoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Fetch in search function failed');
      console.error(error);
    });

  return fetchResults;
}
