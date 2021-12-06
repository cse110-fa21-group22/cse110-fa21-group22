/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */
import { addRecipebyList } from '../components/UserLocalStorage.js';
import apiKey from './apikey.js';

const tokenKey = `&apiKey=${apiKey}`;

const storage = window.localStorage;
const recipeLists = [];
let selectedRecipes = [];
let editMode = false;
let copyMode = false;

async function getRecipeArr(idArr) {
  const fetchEndPoint = `https://api.spoonacular.com/recipes/informationBulk?ids=${idArr.join(',')}${tokenKey}`;

  console.log('fetch_endpoint', fetchEndPoint);

  const fetchResults = await fetch(fetchEndPoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Fetch in favorite page failed');
      console.error(error);
    });

  console.log('result is: ', fetchResults);
  return fetchResults;
}

async function init() {
  console.log('init function');
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

  const mainSection = document.querySelector('.favorites-page');
  const editButton = document.getElementById('edit');
  const cancelButton = document.getElementById('cancel');
  const deleteButton = document.getElementById('delete');
  const copyButton = document.getElementById('copy');

  for (let i = 0; i < localStorage.length; i += 1) {
    // get one list
    const userList = document.createElement('user-list');
    const arrRecipeId = JSON.parse(storage.getItem(localStorage.key(i)));
    console.log('arrRecipeId = ', arrRecipeId);
    let recipeArr = [];

    // eslint-disable-next-line no-await-in-loop
    if (arrRecipeId.length) recipeArr = await getRecipeArr(arrRecipeId);
    userList.list = recipeArr;
    userList.listName = localStorage.key(i);

    // Add a recipe to the selectedRecipes list when its selected
    userList.addEventListener('selected', (event) => {
      selectedRecipes.push(event.detail);
      console.log(selectedRecipes);
    });

    // Remove a recipe from the selectedRecipes list when deselected
    userList.addEventListener('deselected', (event) => {
      selectedRecipes.pop(event.detail);
      console.log(selectedRecipes);
    });

    if (userList.listName === 'favorites-master') {
      userList.listName = 'Favorites';
      // mainSection.insertBefore(userList, mainSection.firstChild);
      mainSection.appendChild(userList);
    } else {
      mainSection.appendChild(userList);
    }
    recipeLists.push(userList);
  }

  // eslint-disable-next-line no-unused-vars
  async function getRecipebyID(id) {
    const fetchEndPoint = `https://api.spoonacular.com/recipes/${id}/information${tokenKey}&includeNutrition=false`;

    // console.log("fetch_endpoint", fetchEndPoint);

    const fetchResults = await fetch(fetchEndPoint)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Fetch in favorite page failed');
        console.error(error);
      });

    // console.log("result is: ", fetchResults);
    return fetchResults;
  }

  copyButton.addEventListener('click', () => {
    if (!copyMode) {
      if (!editMode) {
        enterEditMode();
      }
      enterCopyMode();
    }
  });

  editButton.addEventListener('click', () => {
    if (!editMode) {
      enterEditMode();
    }
  });

  cancelButton.addEventListener('click', () => {
    if (editMode) {
      exitEditMode();
    }
    if (copyMode) {
      exitCopyMode();
    }
  });

  deleteButton.addEventListener('click', () => {
    for (let i = 0; i < selectedRecipes.length; i += 1) {
      selectedRecipes[i].delete();
    }
    selectedRecipes = [];
  });

  // Listen for a copy here button to be clicked
  document.addEventListener('copy-to-list', (event) => {
    console.log('calling copy');
    copy(event.detail);
  });
}

function copy(userList) {
  console.log('copy called');
  for (let i = 0; i < selectedRecipes.length; i++) {
    // Iterate over the user list and see if a selected recipe is
    // already in the list.
    let foundInList = false;
    console.log(`userList: ${userList.list}`);
    console.log(`selected: ${selectedRecipes}`)
    for (let j = 0; j < userList.list.length; j++) {
      console.log(`if ${selectedRecipes[i].getAttribute('recipe-id')} == ${userList.list[j].getAttribute('recipe-id')}`);
      if (selectedRecipes[i].getAttribute('recipe-id') == userList.list[j].getAttribute('recipe-id')) {
        foundInList = true; 
        break;
      }
    }
    // If the recipe wasn't in the user list, add it to the user list
    if (foundInList) {
      console.log(`ignoring recipe ${parseInt(selectedRecipes[i].getAttribute('recipe-id'))}`);
      continue;
    } else {
      console.log(`copying recipe ${parseInt(selectedRecipes[i].getAttribute('recipe-id'))}`);
      // Create a deep copy of the recicpe card
      let recipeCard = selectedRecipes[i].cloneNode(true);
      recipeCard.recipe = selectedRecipes[i].recipe;
      // Exit and reenter copy mode to reset styling
      recipeCard.exitSelectMode();
      recipeCard.enterSelectMode();
      userList.pushRecipe(recipeCard);
    }
  }
}

/**
 * Enter edit mode on favorites page
 */
function enterEditMode() {
  if (editMode) return;
  if (copyMode) {
    exitCopyMode();
    return;
  }
  editMode = true;
  // Style page for edit mode
  const editButton = document.getElementById('edit');
  const cancelButton = document.getElementById('cancel');
  const deleteButton = document.getElementById('delete');
  const copyButton = document.getElementById('copy');
  document.body.style.backgroundColor = '#EEEEEE';
  editButton.style.display = 'none';
  cancelButton.style.display = 'inline-block';
  deleteButton.style.display = 'inline-block';
  copyButton.style.display = 'inline-block';
  // Make favorites list titles editable
  const listTitles = document.querySelectorAll('h4');
  for (let i = 0; i < listTitles.length; i += 1) {
    listTitles[i].setAttribute('contenteditable', true);
  }
  // Enter select mode on all recipe cards
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].enterSelectMode();
    }
  }
}

/**
 * Exit edit mode on favorites page
 */
function exitEditMode() {
  if (!editMode) return;
  if (copyMode) {
    exitCopyMode();
  }
  editMode = false;
  // Style page for default mode
  const editButton = document.getElementById('edit');
  const cancelButton = document.getElementById('cancel');
  const deleteButton = document.getElementById('delete');
  const copyButton = document.getElementById('copy');
  document.body.style.backgroundColor = '#FFFFFF';
  editButton.style.display = 'inline-block';
  cancelButton.style.display = 'none';
  deleteButton.style.display = 'none';
  copyButton.style.display = 'none';
  // Make favorites list titles uneditable
  const listTitles = document.querySelectorAll('h4');
  for (let i = 0; i < listTitles.length; i += 1) {
    listTitles[i].setAttribute('contenteditable', false);
  }
  // Exit select mode on recipe cards
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].exitSelectMode();
    }
  }
}


/**
 * Enter copy mode on favorites page.
 */
function enterCopyMode() {
  if (copyMode) return;
  if (!editMode) {
    enterEditMode();
  }
  copyMode = true;
  editMode = false;
  // Format menu buttons for copy mode
  const editButton = document.getElementById('edit');
  const cancelButton = document.getElementById('cancel');
  const deleteButton = document.getElementById('delete');
  const copyButton = document.getElementById('copy');
  copyButton.style.display = 'none';
  editButton.style.display = 'none';
  deleteButton.style.display = 'none';
  cancelButton.style.display = 'inline-block';
  // Make copy here buttons visible
  for (let i = 0; i < recipeLists.length; i++) {
    let copyHereButton = recipeLists[i].shadow.querySelector('.copy-here');
    copyHereButton.style.display = 'inline-block';
  }
}


/**
 * Exit copy mode on favorites page. Returns you to edit mode.
 */
function exitCopyMode() {
  if (!copyMode) return;
  copyMode = false;
  for (let i = 0; i < recipeLists.length; i++) {
    let copyHereButton = recipeLists[i].shadow.querySelector('.copy-here');
    copyHereButton.style.display = 'none';
  }
  enterEditMode();
}

window.addEventListener('DOMContentLoaded', init);
