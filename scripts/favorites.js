/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */
import { addRecipebyList } from '../components/UserLocalStorage.js';
import apiKey from './apikey.js';

const tokenKey = `&apiKey=${apiKey}`;

const storage = window.localStorage;
const recipeLists = [];
const selectedRecipes = [];

async function getRecipeArr(idArr) {
  const fetchEndPoint = `https://api.spoonacular.com/recipes/informationBulk?ids=${idArr.join(',')}${tokenKey}&includeNutrition=true`;

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

  // Detect if the device is mobile or PC
  const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
  // intiallize the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');
  sidebarContent.style.display = 'none';

  const sidebarButton = navbarComponent.shadow.querySelector('.sidebar-button');
  sidebarButton.style.display = 'none';
  
  const mainSection = document.querySelector('.favorites-page');
  for (let i = 0; i < localStorage.length; i += 1) {
    // do not display master favorites on favorites page
    if (localStorage.key(i) === 'favorites-master') continue;
    // get one list
    const userList = document.createElement('user-list');
    const arrRecipeId = JSON.parse(storage.getItem(localStorage.key(i)));
    console.log('arrRecipeId = ', arrRecipeId);
    let recipeArr = [];

    // eslint-disable-next-line no-await-in-loop
    if (arrRecipeId.length) recipeArr = await getRecipeArr(arrRecipeId);
    userList.list = recipeArr;
    userList.listName = localStorage.key(i);
    userList.addEventListener('selected', (event) => {
      selectedRecipes.push(event.detail);
      console.log(selectedRecipes);
    });
    userList.addEventListener('deselected', (event) => {
      selectedRecipes.pop(event.detail);
      console.log(selectedRecipes);
    });
    if (userList.listName === 'My Favorites') {
      mainSection.insertBefore(userList, mainSection.firstChild);
    } else {
      mainSection.appendChild(userList);
    }
    recipeLists.push(userList);
  }
}

window.addEventListener('DOMContentLoaded', init);

// eslint-disable-next-line no-unused-vars
async function getRecipebyID(id) {
  const fetchEndPoint = `https://api.spoonacular.com/recipes/${id}/information${tokenKey}&includeNutrition=true`;

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

let editMode = false;
const editButton = document.getElementById('edit');
const cancelButton = document.getElementById('cancel');
const moveButton = document.getElementById('move');

editButton.addEventListener('click', () => {
  if (editMode) return;
  editMode = true;
  document.body.style.backgroundColor = '#EEEEEE';
  editButton.style.display = 'none';
  cancelButton.style.display = 'inline-block';
  moveButton.style.display = 'inline-block';
  // edit favorites list titles
  const listTitles = document.querySelectorAll('h4');
  for (let i = 0; i < listTitles.length; i += 1) {
    listTitles[i].setAttribute('contenteditable', true);
  }
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].enterSelectMode();
    }
  }
});

cancelButton.addEventListener('click', () => {
  if (!editMode) return;
  // cancel the edit mode
  editMode = false;
  document.body.style.backgroundColor = '#FFFFFF';
  editButton.style.display = 'inline-block';
  cancelButton.style.display = 'none';
  moveButton.style.display = 'none';
  // edit favorites list titles
  const listTitles = document.querySelectorAll('h4');
  for (let i = 0; i < listTitles.length; i += 1) {
    listTitles[i].setAttribute('contenteditable', false);
  }
  for (const list of recipeLists) {
    for (let i = 0; i < list.list.length; i += 1) {
      list.list[i].exitSelectMode();
    }
  }
});

moveButton.addEventListener('click', () => {
  if (!editMode || selectedRecipes) return;
  const modal = document.querySelector('.modal');
  for (let i = 0; i < localStorage.length; i += 1) {
    if (localStorage.key(i) === 'favorites-master' || localStorage.key(i) === 'My Favorites ') continue;
    const button = document.createElement('button');
    button.innerHTML = localStorage.key(i);
    button.addEventListener('click', () => {
      for (const id of selectedRecipes) {
        addRecipebyList(localStorage.key(i), id);
      }
      document.location.reload(true);
    });
    modal.appendChild(button);
  }
  modal.style.display = 'block';
});
