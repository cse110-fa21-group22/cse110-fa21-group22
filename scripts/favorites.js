/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 * @module favorites.js
 */
import { initLocalStorage, removeList } from '../components/UserLocalStorage.js';

const storage = window.localStorage;
const recipeLists = [];
let selectedRecipes = [];
let editMode = false;
let copyMode = false;
let performedOperation = false;

/**
 * Hide the select guide text
 */
function hideSelectGuideText() {
  const selectGuideText = document.getElementById('select-guide-text');
  selectGuideText.style.visibility = 'hidden';
  selectGuideText.style.height = '0px';
}

/**
 * Show the select guide text
 */
function showSelectGuideText() {
  const selectGuideText = document.getElementById('select-guide-text');
  selectGuideText.style.visibility = 'visible';
  selectGuideText.style.height = 'auto';
}

/**
 * Enter edit mode on favorites page
 */
function enterEditMode() {
  if (editMode) return;
  if (copyMode) {
    // eslint-disable-next-line no-use-before-define
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
  // Enter select mode on all recipe cards and show list delete icon
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].enterSelectMode();
    }
    if (list.name !== 'My Favorites') {
      const userListDeleteIcon = list.shadow.querySelector('.delete-icon');
      userListDeleteIcon.style.display = 'inline-block';
    }
  }
}

/**
 * Exit edit mode on favorites page
 */
function exitEditMode() {
  if (!editMode) return;
  if (copyMode) {
    // eslint-disable-next-line no-use-before-define
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
  // Exit select mode on recipe cards and hide list delete icon
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].exitSelectMode();
    }
    const userListDeleteIcon = list.shadow.querySelector('.delete-icon');
    userListDeleteIcon.style.display = 'none';
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
  for (let i = 0; i < recipeLists.length; i += 1) {
    const copyHereButton = recipeLists[i].shadow.querySelector('.copy-here');
    copyHereButton.style.display = 'inline-block';
  }
}

/**
 * Exit copy mode on favorites page. Returns you to edit mode.
 */
function exitCopyMode() {
  if (!copyMode) return;
  copyMode = false;
  for (let i = 0; i < recipeLists.length; i += 1) {
    const copyHereButton = recipeLists[i].shadow.querySelector('.copy-here');
    copyHereButton.style.display = 'none';
  }
  enterEditMode();
}

/**
 * Copy the selection to the UserList, ignoring duplicates
 * @param {object} userList the UserList to copy to
 */
function copy(userList) {
  for (let i = 0; i < selectedRecipes.length; i += 1) {
    // Iterate over the user list and see if a selected recipe is
    // already in the list.
    let foundInList = false;
    for (let j = 0; j < userList.list.length; j += 1) {
      if (selectedRecipes[i].recipeId === userList.list[j].recipeId) {
        foundInList = true;
        break;
      }
    }
    // If the recipe wasn't in the user list, add it to the user list
    if (!foundInList) {
      // Create a deep copy of the recicpe card
      const recipeCard = selectedRecipes[i].cloneNode(true);
      recipeCard.recipe = selectedRecipes[i].recipe;
      // Exit and reenter copy mode to reset styling
      recipeCard.exitSelectMode();
      recipeCard.enterSelectMode();
      // Add the card to the user list
      userList.pushRecipe(recipeCard);
    }
  }
  // Deselect recipes after copy operation
  for (let i = selectedRecipes.length - 1; i > -1; i -= 1) {
    // console.log(`deselecting recipe ${selectedRecipes[i].recipeId}`);
    selectedRecipes[i].deselect();
  }
  // Update edit button text because the user has performed an operation
  const cancelButton = document.getElementById('cancel');
  performedOperation = true;
  cancelButton.innerText = 'Save';
  exitCopyMode();
}

/**
 * it is possible that the user click the icon and coming back to the main page
 * therefore, only initilize the favorite-master local storage when it does not even exist
 */
function initLocalStorageDoubt() {
  // Meaning that favorites-master does not exist
  if (storage.getItem('favorites-master') == null) {
    initLocalStorage();
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
    // Add a recipe to selectedRecipes when selected
    // eslint-disable-next-line no-loop-func
    userList.addEventListener('selected', (event) => {
      selectedRecipes.push(event.detail);
      hideSelectGuideText();
      copyButton.style.display = 'inline-block';
      deleteButton.style.display = 'inline-block';
      console.log(selectedRecipes);
    });

    // Remove a recipe from the selectedRecipes list when deselected
    // eslint-disable-next-line no-loop-func
    userList.addEventListener('deselected', (event) => {
      selectedRecipes.pop(event.detail);
      if (selectedRecipes.length === 0) {
        if (copyMode) exitCopyMode();
        showSelectGuideText();
        copyButton.style.display = 'none';
        deleteButton.style.display = 'none';
      }
      console.log(selectedRecipes);
    });

    if (userList.listName !== 'My Favorites') {
      const deleteIcon = userList.shadow.querySelector('.delete-icon');
      // eslint-disable-next-line no-loop-func
      deleteIcon.addEventListener('click', () => {
        // eslint-disable-next-line no-alert
        const confirmation = window.confirm('Are you sure you want to delete this list?');
        if (confirmation) {
          removeList(userList.name);
          userList.remove();
          performedOperation = true;
          cancelButton.innerText = 'Save';
        }
      });
    }

    if (userList.listName === 'My Favorites') {
      mainSection.insertBefore(userList, mainSection.firstChild);
    } else {
      mainSection.appendChild(userList);
    }
    recipeLists.push(userList);
  }

  // eslint-disable-next-line no-unused-vars
  /* async function getRecipebyID(id) {
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
  } */

  // When copy is clicked, copy mode should be entered
  copyButton.addEventListener('click', () => {
    if (!copyMode) {
      if (!editMode) {
        enterEditMode();
      }
      enterCopyMode();
    }
  });

  // When edit is clicked, edit mode should be entered
  editButton.addEventListener('click', () => {
    if (!editMode) {
      enterEditMode();
    }
  });

  // When cancel is clicked, the user should either exit
  // copy mode or edit mode
  cancelButton.addEventListener('click', () => {
    if (editMode) {
      exitEditMode();
    }
    if (copyMode) {
      exitCopyMode();
    }
  });

  // Delete all selected recipes when the user clicks delete
  deleteButton.addEventListener('click', () => {
    // Iterate and delete selected recipes
    for (let i = 0; i < selectedRecipes.length; i += 1) {
      selectedRecipes[i].delete();
    }
    // Clear the user's selection once recipes are deleted
    selectedRecipes = [];
    // Update cancel button text to say "Save"
    performedOperation = true;
    cancelButton.innerText = 'Save';
    // The user has no selected recipes, so show the select guide text
    // and hide operations buttons
    showSelectGuideText();
    copyButton.style.display = 'none';
    deleteButton.style.display = 'none';
  });

  // Listen for a copy here button to be clicked
  document.addEventListener('copy-to-list', (event) => {
    copy(event.detail);
  });

  // Event listener for escape keybind. Will attempt to deselect first.
  // If it fails, it will attempt to exit edit mode. If it fails,
  // it will attempt to exit copy mode.
  document.addEventListener('keydown', (event) => {
    // eslint-disable-next-line eqeqeq
    if (event.key == 'Escape') {
      if (selectedRecipes.length > 0) {
        for (let i = selectedRecipes.length - 1; i > -1; i -= 1) {
          selectedRecipes[i].deselect();
        }
      } else if (editMode) {
        exitEditMode();
      } else if (copyMode) {
        exitCopyMode();
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
