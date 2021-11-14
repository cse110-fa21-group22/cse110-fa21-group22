/**
 * Handles the recipe page functionality. Recipe page is when the user clicks on a recipe and the actual full page with all information 
 * pulls up for it. 
 */

const apiKey = '5db4419fe89442edac46edfa465e1c35';
const tokenKey = '?apiKey=' + apiKey;

window.addEventListener('DOMContentLoaded', init);

/**
 * Initializes the recipe page
 */
async function init () {
  const recipe = await lookup(); // This might actually be slow, might be better to load concurrently with DOM elements rather than after
  
  console.log(recipe);

  // Set recipe image
  const recipeImg = document.querySelector('.recipe-image');
  recipeImg.src = recipe.image;

  // Set recipe title
  const recipeName = document.querySelector('.recipe-name');
  recipeName.innerHTML = recipe.title;

  // Set prep time
  const prepTime = document.getElementById('prep-time');
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
//   const ingredientsSection = document.querySelector('.ingredients-list');
//   const ingredientsList = recipe.extendedIngredients;
//   console.log("1",ingredientsList);

//   for (const ingredient in ingredientsList) { 
// //     // console.log(ingredients);
// //     // const ingredientsCard = document.createElement('recipe-card-component');
// //     // console.log(ingredientsList[ingredient]);
// //     // ingredientsCard.ingredients = ingredientsList[ingredient];
// //     // ingredientsSection.appendChild(ingredientsCard);
// //     console.log(ingredientsCard);
//         ingredientsSection.innerHTML += ingredientsList[ingredient]['name'];
//   }
// // ingredientsSection.innerHTML = recipe.extendedIngredients;



  // TODO Set equipment using custom element

  // Set instructions by getting the analyzedInstructions object
  const recipeSteps = document.querySelector('.recipe-steps')
  const instructionsList = recipe.analyzedInstructions[0].steps;
  for(const instructionNumber in instructionsList){
    let currStep = document.createElement('li');
    currStep.innerText = instructionsList[instructionNumber].step;
    recipeSteps.appendChild(currStep);
  }

    // TODO Add event listeners and callback functions to all the buttons 
    // Event listener for button to go to instructions from ingredients
    const instructionsButton = document.querySelector('.instructions-link');
    instructionsButton.addEventListener('click', function(event){
      const instructionsLink = document.querySelector('.recipe-method');
      instructionsLink.scrollIntoView();
    });

    // Event listener for button to go to ingredients from instructions
    const ingredientsButton = document.querySelector('.ingredients-link');
    ingredientsButton.addEventListener('click', function(event){
        const ingredentsLink = document.querySelector('.ingredients-list');
        ingredentsLink.scrollIntoView();
    });

}

/**
 * Performs a recipe lookup based on the id passed in to the page URL
 * @returns {object} json containing recipe information
 */
async function lookup() {
  const regex = 'id='
  const id =  window.location.href.substring(window.location.href.search(regex) + 3, window.location.href.length); // Using regex to grab id from URL
  const fetchEndpoint = 'https://api.spoonacular.com/recipes/' + id + '/information' + tokenKey;

  const fetchResults = await fetch(fetchEndpoint)
  .then(response => response.json())
  .catch((error) => {
    console.error("Fetch in recipe lookup failed");
    console.error(error);
  })
  return fetchResults;
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