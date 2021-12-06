/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */
import { addRecipebyList } from '../components/UserLocalStorage.js';

const storage = window.localStorage;
const recipeLists = [];
let selectedRecipes = [];
let editMode = false;
let copyMode = false;
let performedOperation = false;

async function init() {
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
  // Disable the sidebar button
  const sidebarButton = document.querySelector('navbar-component').shadow.querySelector('.sidebar-button');
  sidebarButton.style.display = 'none';
  // Hide the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');
  sidebarContent.style.display = 'none';

  for (let i = 0; i < storage.length; i += 1) {
    // Do not display master favorites on favorites page
    if (storage.key(i) === 'favorites-master') continue;
    const userList = document.createElement('user-list');
    const arrRecipeObj = JSON.parse(storage.getItem(localStorage.key(i)));
    userList.listName = storage.key(i);
    userList.list = arrRecipeObj;
    userList.addEventListener('selected', (event) => {
      selectedRecipes.push(event.detail);
      hideSelectGuideText();
      copyButton.style.display = 'inline-block';
      deleteButton.style.display = 'inline-block';
      console.log(selectedRecipes);
    });

    // Remove a recipe from the selectedRecipes list when deselected
    userList.addEventListener('deselected', (event) => {
      selectedRecipes.pop(event.detail);
      if (selectedRecipes.length == 0) {
        if (copyMode) exitCopyMode();
        showSelectGuideText();
        copyButton.style.display = 'none';
        deleteButton.style.display = 'none';
      }
      console.log(selectedRecipes);
    });
    if (userList.listName === 'My Favorites') {
      mainSection.insertBefore(userList, mainSection.firstChild);
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
    for (let i = 0; i < selectedRecipes.length; i++) {
      selectedRecipes[i].delete();
    }
    selectedRecipes = [];
    // Update edit button text
    const cancelButton = document.getElementById('cancel');
    performedOperation = true;
    cancelButton.innerText = 'Save';
    showSelectGuideText();
    copyButton.style.display = 'none';
    deleteButton.style.display = 'none';
  });

  // Listen for a copy here button to be clicked
  document.addEventListener('copy-to-list', (event) => {
    copy(event.detail);
  });
}

function copy(userList) {
  for (let i = 0; i < selectedRecipes.length; i++) {
    // Iterate over the user list and see if a selected recipe is
    // already in the list.
    let foundInList = false;
    for (let j = 0; j < userList.list.length; j++) {
      if (selectedRecipes[i].recipeId == userList.list[j].recipeId) {
        foundInList = true; 
        break;
      }
    }
    // If the recipe wasn't in the user list, add it to the user list
    if (!foundInList) {
      // Create a deep copy of the recicpe card
      let recipeCard = selectedRecipes[i].cloneNode(true);
      recipeCard.recipe = selectedRecipes[i].recipe;
      // Exit and reenter copy mode to reset styling
      recipeCard.exitSelectMode();
      recipeCard.enterSelectMode();
      userList.pushRecipe(recipeCard);
    }
  }
  // Deselect recipes after copy operation
  for (let i = selectedRecipes.length - 1; i > -1; i--) {
    //console.log(`deselecting recipe ${selectedRecipes[i].recipeId}`);
    selectedRecipes[i].deselect();
  }
  // Update edit button text
  const cancelButton = document.getElementById('cancel');
  performedOperation = true;
  cancelButton.innerText = 'Save';
  exitCopyMode();
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
  let selectGuideText = document.getElementById('select-guide-text');
  document.body.style.backgroundColor = '#EEEEEE';
  editButton.style.display = 'none';
  cancelButton.style.display = 'inline-block';
  // Select guide text should hide if no recipes are selected
  // Otherwise it should appear
  if (selectedRecipes.length > 0) {
    hideSelectGuideText();
    deleteButton.style.display = 'inline-block';
    copyButton.style.display = 'inline-block';
  } else {
    showSelectGuideText();
  }
  // Style edit button text appropriately
  if (performedOperation) {
    cancelButton.innerText = 'Save';
  } else {
    cancelButton.innerText = 'Cancel';
  }
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
  performedOperation = false;
  // Style page for default mode
  const editButton = document.getElementById('edit');
  const cancelButton = document.getElementById('cancel');
  const deleteButton = document.getElementById('delete');
  const copyButton = document.getElementById('copy');
  document.body.style.backgroundColor = '#FFFFFF';
  hideSelectGuideText();
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
  cancelButton.innerText = 'Cancel';
  // Make copy here buttons visible
  for (let i = 0; i < recipeLists.length; i++) {
    let copyHereButton = recipeLists[i].shadow.querySelector('.copy-here');
    copyHereButton.style.display = 'inline-block';
    // Title text should fit in space available
    let titleText = recipeLists[i].shadow.querySelector('.list-name h4');
    titleText.style.width = 'calc(100% - 160px)';
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
    // Title text should fit in ALL space available without wrapping
    let titleText = recipeLists[i].shadow.querySelector('.list-name h4');
    titleText.style.width = '50vw';
  }
  enterEditMode();
}


/**
 * Hide the select guide text
 */
function hideSelectGuideText() {
  let selectGuideText = document.getElementById('select-guide-text');
  selectGuideText.style.visibility = 'hidden';
  selectGuideText.style.height = '0px';
}

/**
 * Show the select guide text
 */
function showSelectGuideText() {
  let selectGuideText = document.getElementById('select-guide-text');
  selectGuideText.style.visibility = 'visible';
  selectGuideText.style.height = 'auto';
}

window.addEventListener('DOMContentLoaded', init);
