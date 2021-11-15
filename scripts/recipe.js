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
  recipeName.innerHTML = recipe.title + 
    `<button class="favorite-heart">
      <img src="../assets/favorite.svg"/>
    </button>`;

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

  // // TODO Set equipment using custom element
  // const equipmentListData = [];
  // const analyzedInstructions = recipe.analyzedInstructions[0].steps;
  // for(const stepNumber in analyzedInstructions){
  //   for(const equipmentNum in analyzedInstructions[stepNumber].equipment){
  //     equipmentListData.push(analyzedInstructions[stepNumber].equipment[equipmentNum]);
  //     // console.log(equipmentNum);
  //   }
  // }
  // // console.log(equipmentListData);

  // // Then make the custom element for equipments
  // const equipMasterList = []
  // const equipmentSection = document.querySelector('.equipment-list');
  // for(const equip in equipmentListData){
  //   if(!equipMasterList.find(element => element = equipmentListData[equip]['id'])){
  //     const equipmentCard = document.createElement('equipment-card-component');
  //     equipmentCard.equipment = equipmentListData[equip];
  //     equipmentSection.appendChild(equipmentCard);
  //     equipMasterList.push(equipmentListData[equip]['id']);
  //     // console.log(equipmentCard);
  //   }
  // }
  

  // Set instructions by getting the analyzedInstructions object
  const recipeSteps = document.querySelector('.recipe-steps')
  const instructionsList = recipe.analyzedInstructions[0].steps;
  for(const instructionNumber in instructionsList){
    let currStep = document.createElement('li');
    currStep.innerText = instructionsList[instructionNumber].step;
    recipeSteps.appendChild(currStep);
  }
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