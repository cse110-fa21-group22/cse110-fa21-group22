/**
 * Handles the search page.
 * Different from search.js because search.js handles search across all html pages that use the search function.
 * @module searchpage
 */

import { initLocalStorage } from '../components/UserLocalStorage.js';
import search from './search.js';

export default function searchpageRefreshSearchResult() {
  // clearResults(); // clear everything in the search result
  // showFavoriteSection(); // loading facorite section one more time

  const recipeSection = document.querySelector('.recipe-section');
  /**
   * call initilize dropDown and initilize heart
   */
  const recipeCardList = recipeSection.querySelectorAll('recipe-card-component');
  for (let i = 0; i < recipeCardList.length; i += 1) {
    const recipeCard = recipeCardList[i];
    recipeCard.initializeDropdown();
    recipeCard.initializeHearts();
    recipeCard.hideDropdown();
  }
}
const storage = window.localStorage;

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

/**
 * This function initializes the search page
 * and automatically extracts data from the query string and runs a search
 * @param {none}
 * @return {none}
 */
function init() {
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

  // Detect if the device is mobile or PC
  const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
  // Intiallize the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');

  // make sure side-bar button always appears on searchPage
  navbarComponent.shadow.querySelector('.sidebar-button').style.display = 'inline';

  if (!isMobile && sidebarContent.style.display !== 'none') {
    sidebarContent.style.display = 'flex';
    sidebarContent.style.flexDirection = 'column';
    const mainSection = document.querySelector('.search-page');
    mainSection.style.marginLeft = `${225}px`;
  } else if (!isMobile) {
    sidebarContent.style.display = 'none';
  }

  // TODO: need to find a better way
  // Fix the that the button cannot use for the first press
  if (!isMobile) {
    navbarComponent.shadow.querySelector('.sidebar-button').click();
  }

  const recipeSection = document.querySelector('.recipe-section');
  /**
   * Generates a query string to pass the search to the search page
   * @param {string} newSearchTerm - the user's search phrase
   * @return {string} - the query string
   */
  // eslint-disable-next-line class-methods-use-this
  function generateQueryString(newSearchTerm) {
    let queryString = '?search=';
    for (let i = 0; i < newSearchTerm.length; i += 1) {
      const currChar = newSearchTerm.charAt(i);
      const currCharCode = newSearchTerm.charCodeAt(i);
      // Allow all letters and numbers to enter the query
      if ((currCharCode >= 65 && currCharCode <= 90) || (currCharCode >= 97 && currCharCode <= 122) || (currCharCode >= 48 && currCharCode <= 57)) {
        queryString += currChar;
        // Spaces become + signs
      } else if (currCharCode === '32') {
        queryString += '+';
        // All other characters become - signs
      } else {
        queryString += '-';
      }
    }
    return queryString;
  }

  /**
   * This function parses the query string to retrieve relevant information
   * @returns {string} the user's search term
   */
  function parseQueryString() {
    const queryString = window.location.search;
    // Get rid of '?search='
    let searchTerm = queryString.substring(8);
    // Convert string back to original formatting, with disallowed characters gone
    searchTerm = searchTerm.replaceAll('+', ' ').replaceAll('-', ' ');
    return searchTerm;
  }

  /**
   * This function clears the results on the search page
   * @param {none}
   * @return {none}
   */
  function clearResults() {
    while (recipeSection.firstChild) {
      recipeSection.removeChild(recipeSection.firstChild);
    }
  }

  /**
   * Shows the search results on the page
   * @param {Object} results The search results
   * @returns {none}
   */
  function showResults(results) {
    // Clear the results before searching
    clearResults();
    // Add the recipes to the page
    for (const recipe in results) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = results[recipe];
      recipeSection.appendChild(recipeCard);
    }
  }

  /**
   * Initialize previous and next button
   */
  function initializeButton() {
    // Section is for next and previous buttons
    const previousButton = document.querySelector('.previous-button');
    const nextButton = document.querySelector('.next-button');
    const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
    previousButton.disabled = true;
    if (totalPageNumberPlace.innerHTML === '1') {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  // Automatically parse the query string and run a search when page reload
  let searchTerm = parseQueryString();
  const navbarInputbox = document.querySelector('navbar-component').shadow.querySelector('.nav-search-input');
  navbarInputbox.value = `${searchTerm}`;
  let inputList = JSON.parse(window.localStorage.getItem('QueryList'));
  window.localStorage.removeItem('QueryList');
  // If someone try the search url, it's the default set
  if (inputList === null) {
    inputList = {};
    inputList.number = 10;
    inputList.offset = 0;
    inputList.sort = '';
    inputList.recipeNutrition = 'true';
    inputList.cuisineFilter = '';
    inputList.dietFilter = '';
    inputList.timeFilter = '';
    inputList.typeFilter = '';
    inputList.cuisineFilterCheckbox = [0, 0, 0, 0, 0, 0];
    inputList.dietFilterCheckbox = [0, 0, 0, 0, 0];
    inputList.timeFilterCheckbox = [0, 0, 0, 0];
    inputList.typeFilterCheckbox = [0, 0, 0, 0];
  }
  inputList.query = searchTerm;
  const checkboxesCuisine = sidebarContent.querySelectorAll('.cuisine');
  const checkboxesDiet = sidebarContent.querySelectorAll('.diet');
  const checkboxesTime = sidebarContent.querySelectorAll('.time');
  const checkboxesType = sidebarContent.querySelectorAll('.typeOfMeal');
  // Set checkboxes for the previous search
  for (let i = 0; i < inputList.cuisineFilterCheckbox.length; i += 1) {
    if (inputList.cuisineFilterCheckbox[i] === 1) {
      checkboxesCuisine[i].checked = true;
    }
  }
  for (let i = 0; i < inputList.dietFilterCheckbox.length; i += 1) {
    if (inputList.dietFilterCheckbox[i] === 1) {
      checkboxesDiet[i].checked = true;
    }
  }
  for (let i = 0; i < inputList.timeFilterCheckbox.length; i += 1) {
    if (inputList.timeFilterCheckbox[i] === 1) {
      checkboxesTime[i].checked = true;
    }
  }
  for (let i = 0; i < inputList.typeFilterCheckbox.length; i += 1) {
    if (inputList.typeFilterCheckbox[i] === 1) {
      checkboxesType[i].checked = true;
    }
  }
  search(inputList).then((value) => {
    document.querySelector('.search-word').innerHTML = `${inputList.query}`;
    const pageNumber = Math.ceil(value.totalResults / 10);
    const totalResult = document.querySelector('.totalResults').querySelector('span');
    const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
    const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
    totalResult.innerHTML = totalResult.innerHTML.replace('0', value.totalResults);
    currPageNumberPlace.innerHTML = currPageNumberPlace.innerHTML.replace('0', '1');
    totalPageNumberPlace.innerHTML = totalPageNumberPlace.innerHTML.replace('0', `${pageNumber}`);
    showResults(value.results);
    initializeButton();
  });

  // apply for the filter search
  const applyButton = sidebarContent.querySelector('.apply-filter');
  applyButton.addEventListener('click', () => {
    searchTerm = navbarInputbox.value;
    const newInputList = {};
    newInputList.query = searchTerm;
    newInputList.number = 10; // Default returns 10 recipes
    newInputList.offset = 0;
    newInputList.sort = '';
    newInputList.recipeNutrition = 'true';
    let cuisineFilter = '';
    let dietFilter = '';
    let timeFilter = '';
    let typeFilter = '';
    const cuisineFilterCheckbox = [];
    const dietFilterCheckbox = [];
    const timeFilterCheckbox = [];
    const typeFilterCheckbox = [];
    for (let i = 0; i < checkboxesCuisine.length; i += 1) {
      const item = checkboxesCuisine[i];
      if (item.checked) {
        cuisineFilter = `${cuisineFilter + item.id},`;
        cuisineFilterCheckbox[i] = 1;
      } else {
        cuisineFilterCheckbox[i] = 0;
      }
    }
    for (let i = 0; i < checkboxesDiet.length; i += 1) {
      const item = checkboxesDiet[i];
      if (item.checked) {
        dietFilter = `${dietFilter + item.id},`;
        dietFilterCheckbox[i] = 1;
      } else {
        dietFilterCheckbox[i] = 0;
      }
    }
    for (let i = 0; i < checkboxesTime.length; i += 1) {
      const item = checkboxesTime[i];
      if (item.checked) {
        timeFilter = Math.max(timeFilter, item.id);
        timeFilterCheckbox[i] = 1;
      } else {
        timeFilterCheckbox[i] = 0;
      }
    }
    for (let i = 0; i < checkboxesType.length; i += 1) {
      const item = checkboxesType[i];
      if (item.checked) {
        typeFilter = `${typeFilter + item.id},`;
        typeFilterCheckbox[i] = 1;
      } else {
        typeFilterCheckbox[i] = 0;
      }
    }
    if (cuisineFilter.length !== 0) cuisineFilter = cuisineFilter.substring(0, cuisineFilter.length - 1);
    if (dietFilter.length !== 0) dietFilter = dietFilter.substring(0, dietFilter.length - 1);
    if (typeFilter.length !== 0) typeFilter = typeFilter.substring(0, typeFilter.length - 1);
    newInputList.cuisineFilter = cuisineFilter;
    newInputList.dietFilter = dietFilter;
    newInputList.timeFilter = timeFilter;
    newInputList.typeFilter = typeFilter;
    newInputList.cuisineFilterCheckbox = cuisineFilterCheckbox;
    newInputList.dietFilterCheckbox = dietFilterCheckbox;
    newInputList.timeFilterCheckbox = timeFilterCheckbox;
    newInputList.typeFilterCheckbox = typeFilterCheckbox;
    window.localStorage.setItem('QueryList', JSON.stringify(newInputList));
    window.location.href = `search.html${generateQueryString(searchTerm)}`;
  });

  const previousButton = document.querySelector('.previous-button');
  const nextButton = document.querySelector('.next-button');
  previousButton.addEventListener('click', () => {
    const currPageNumber = Math.ceil(inputList.offset / 10 + 1);
    inputList.offset -= 10;
    const nextPageNumber = Math.ceil(inputList.offset / 10 + 1);
    search(inputList).then((newValue) => {
      showResults(newValue.results);
    });
    const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
    currPageNumberPlace.innerHTML = currPageNumberPlace.innerHTML.replace(`${currPageNumber}`, `${nextPageNumber}`);
    if (inputList.offset === 0) {
      previousButton.disabled = true;
      nextButton.disabled = false;
    } else {
      previousButton.disabled = false;
      nextButton.disabled = false;
    }
  });

  nextButton.addEventListener('click', () => {
    const currPageNumber = Math.ceil(inputList.offset / 10 + 1);
    inputList.offset += 10;
    const nextPageNumber = Math.ceil(inputList.offset / 10 + 1);
    search(inputList).then((newValue) => {
      showResults(newValue.results);
    });
    const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
    const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
    currPageNumberPlace.innerHTML = currPageNumberPlace.innerHTML.replace(`${currPageNumber}`, `${nextPageNumber}`);
    if (nextPageNumber === parseInt(totalPageNumberPlace.innerHTML, 10)) {
      previousButton.disabled = false;
      nextButton.disabled = true;
    } else {
      previousButton.disabled = false;
      nextButton.disabled = false;
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
