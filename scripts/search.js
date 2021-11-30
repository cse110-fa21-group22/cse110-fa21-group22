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
  // const tokenTime = `&time=${inputList.timeFilter}`;
  const tokenNutritionBool = `&addRecipeNutrition=${inputList['recipe-nutrition']}`;
  let fetchEndpoint = searchUrl + tokenKey + tokenSearchInput; // + tokenTime;
  if (inputList.cuisineFilter !== '') {
    const tokenCuisine = `&cuisine=${inputList.cuisineFilter}`;
    fetchEndpoint += tokenCuisine;
  }
  if (inputList.dietFilter !== '') {
    const tokenDiet = `&diet=${inputList.dietFilter}`;
    fetchEndpoint += tokenDiet;
  }
  if (inputList.typeFilter !== '') {
    const tokenType = `&type=${inputList.typeFilter}`;
    console.log(tokenType);
    fetchEndpoint += tokenType;
    console.log(fetchEndpoint);
  }
  fetchEndpoint += tokenNumResults + tokenOffset + tokenNutritionBool;
  console.log(fetchEndpoint);

  // fetch the data
  const fetchResults = await fetch(fetchEndpoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Fetch in search function failed');
      console.error(error);
    });

  return fetchResults.results;
}
