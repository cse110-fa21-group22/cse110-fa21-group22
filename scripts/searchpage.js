/**
 * Handles the search page.
 * Different from search.js because search.js handles search across all html pages that use the search function.
 */

import search from './search.js';

/**
 * This function initializes the search page
 * and automatically extracts data from the query string and runs a search
 * @param {none}
 * @returns {none}
 */
function init() {
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

  const searchKeyword = document.querySelector('.search-word');
  const recipeSection = document.querySelector('.recipe-section');

  /**
   * This function parses the query string to retrieve relevant information
   * @returns {string} the user's search term
   */
  function parseQueryString() {
    const queryString = window.location.search;
    // Get rid of '?search='
    let searchTerm = queryString.substring(8);
    // Convert string back to original formatting, with disallowed characters gone
    searchTerm = searchTerm.replaceAll('+', ' ').replaceAll('-', '');
    return searchTerm;
  }

  // Automatically parse the query string and run a search on page load
  let searchTerm = parseQueryString();
  const navbarInputbox = document.querySelector('navbar-component').shadow.querySelector('.nav-search-input');
  navbarInputbox.value = `${searchTerm}`;
  const inputList = JSON.parse(window.localStorage.getItem('QueryList'));
  window.localStorage.removeItem('QueryList');

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
    searchKeyword.innerHTML = `${inputList.query}`;
    for (const recipe in results) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = results[recipe];
      recipeSection.appendChild(recipeCard);
    }
  }

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
    const pageNumber = Math.ceil(value.totalResults / 10);
    const totalResult = document.querySelector('.totalResults').querySelector('span');
    const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
    const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
    totalResult.innerHTML = totalResult.innerHTML.replace('0', value.totalResults);
    currPageNumberPlace.innerHTML = currPageNumberPlace.innerHTML.replace('0', '1');
    totalPageNumberPlace.innerHTML = totalPageNumberPlace.innerHTML.replace('0', `${pageNumber}`);
    showResults(value.results);
  });

  // apply for the filter search
  const applyButton = sidebarContent.querySelector('.apply-filter');
  applyButton.addEventListener('click', () => {
    searchTerm = parseQueryString();
    navbarInputbox.value = `${searchTerm}`;
    inputList.query = searchTerm;
    inputList.number = 10;
    inputList.offset = 0;
    inputList.recipeNutrition = 'true';
    let cuisineFilter = '';
    let dietFilter = '';
    let timeFilter = '';
    let typeFilter = '';
    inputList.query = searchTerm;
    inputList.number = 10;
    inputList.offset = 0;
    inputList.recipeNutrition = 'true';
    for (let i = 0; i < checkboxesCuisine.length; i += 1) {
      const item = checkboxesCuisine[i];
      if (item.checked) {
        cuisineFilter = `${cuisineFilter + item.id},`;
      }
    }
    for (let i = 0; i < checkboxesDiet.length; i += 1) {
      const item = checkboxesDiet[i];
      if (item.checked) {
        dietFilter = `${dietFilter + item.id},`;
      }
    }
    for (let i = 0; i < checkboxesTime.length; i += 1) {
      const item = checkboxesTime[i];
      if (item.checked) {
        timeFilter = Math.max(timeFilter, item.id);
      }
    }
    for (let i = 0; i < checkboxesType.length; i += 1) {
      const item = checkboxesType[i];
      if (item.checked) {
        typeFilter = `${typeFilter + item.id},`;
      }
    }
    if (cuisineFilter.length !== 0) cuisineFilter = cuisineFilter.substring(0, cuisineFilter.length - 1);
    if (dietFilter.length !== 0) dietFilter = dietFilter.substring(0, dietFilter.length - 1);
    if (typeFilter.length !== 0) typeFilter = typeFilter.substring(0, typeFilter.length - 1);
    inputList.cuisineFilter = cuisineFilter;
    inputList.dietFilter = dietFilter;
    inputList.timeFilter = timeFilter;
    inputList.typeFilter = typeFilter;
    search(inputList).then((value) => {
      if (value.totalResults === 0) {
        const pageNumber = 0;
        const totalResult = document.querySelector('.totalResults').querySelector('span');
        const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
        const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
        totalResult.innerHTML = `${value.totalResults} recipe`;
        currPageNumberPlace.innerHTML = '0';
        totalPageNumberPlace.innerHTML = `${pageNumber}`;
      } else {
        const pageNumber = Math.ceil(value.totalResults / 10);
        const totalResult = document.querySelector('.totalResults').querySelector('span');
        const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
        const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
        totalResult.innerHTML = `${value.totalResults} recipes`;
        currPageNumberPlace.innerHTML = '1';
        totalPageNumberPlace.innerHTML = `${pageNumber}`;
      }
      showResults(value.results);
    });
  });

  // Section is for next and previous buttons
  const previousButton = document.querySelector('.previous-button');
  const nextButton = document.querySelector('.next-button');
  const currPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.currPageNumber');
  const totalPageNumberPlace = document.querySelector('.pageNumberSection').querySelector('.totalPageNumber');
  previousButton.disabled = true;
  nextButton.disabled = false;

  previousButton.addEventListener('click', () => {
    const currPageNumber = Math.ceil(inputList.offset / 10 + 1);
    inputList.offset -= 10;
    const nextPageNumber = Math.ceil(inputList.offset / 10 + 1);
    search(inputList).then((value) => {
      showResults(value.results);
    });
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
    search(inputList).then((value) => {
      showResults(value.results);
    });
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
