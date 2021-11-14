/**
 * Handles the recipe page functionality. Recipe page is when the user clicks on a recipe and the actual full page with all information 
 * pulls up for it. 
 */

const apiKey = 'bcccf988c95c45ef9b53310545b3989a';
const tokenKey = '?apiKey=' + apiKey;


window.addEventListener('DOMContentLoaded', init);

/**
 * Initializes the recipe page
 */
async function init () {
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
  recipeName.innerHTML = recipe.title;

  // Set prep time
  const prepTime = document.querySelector('#prep-time');
  const time = recipe.readyInMinutes;
  const timestr = formatTime(time);
  prepTime.innerHTML = timestr;

  // Set serving size
  const servingSize = document.querySelector('#serving-size');
  servingSize.innerHTML = recipe.servings;

  // Set description 
  const recipeDescription = document.querySelector('.recipe-page-description + p');
  recipeDescription.innerHTML = recipe.summary;

  // TODO Set ingredients using custom element
  const recipeIngredients = document.createElement('image-card-component');
  recipeIngredients.ingredients = {};
  document.querySelector('.ingredients-equipment').appendChild(recipeIngredients);

  // TODO Set equipment using custom element

  // Set instructions 
  // Possible problem, not all of them are set as a list (some are paragraphs) the data the api gives isn't consistent
  // sometimes it has nonsense
  const recipeInstructions = document.querySelector('.recipe-method');
  recipeInstructions.innerHTML = recipe.instructions;

  // TODO Add event listeners and callback functions to all the buttons 
}

/**
 * Performs a recipe lookup based on the id passed in to the page URL
 * @returns {object} json containing recipe information
 */
function lookup() {
  const regex = 'id='
  const id =  window.location.href.substring(window.location.href.search(regex) + 3, window.location.href.length); // Using regex to grab id from URL
  const fetchEndpointR = 'https://api.spoonacular.com/recipes/' + id + '/information' + tokenKey;
  const fetchEndpointE = 'https://api.spoonacular.com/recipes/' + id + '/equipmentWidget.json' + tokenKey;

  const fetchResultsR = fetch(fetchEndpointR)
  .then(response => response.json())
  .catch((error) => {
    console.error("Recipe fetch in lookup failed");
    console.error(error);
  })

  const fetchResultsE = fetch(fetchEndpointE)
  .then(response => response.json())
  .catch((error) => {
    console.error("Equipment fetch in lookup failed");
    console.error(error);
  })

  return Promise.all([fetchResultsR, fetchResultsE]);
}



/**
 * Converts a value of minutes into a string that shows hours and minutes
 * @param   {number} time - A time in minutes
 * @returns {string} - A string in the form 'XX hours XX minutes'
 */
function formatTime(time) {
    if (time == 1) return time.toString() + ' minute';
    if (time < 70) return time.toString() + ' minutes';
    let hour = Math.floor(time / 60);
    let hrstr = '' + hour;
    let min = time % 60;
    let minstr = '' + min;

    if (hour == 1) hrstr = hrstr + ' hour';
    else hrstr = hrstr + ' hours';

    if (min == 0) minstr = '';
    else if (min == 1) minstr = minstr + ' minute';
    else minstr = minstr + ' minutes';

    return hrstr + ' ' + minstr;
}