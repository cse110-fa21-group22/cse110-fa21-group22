/**
 * Handles the search page.
 *  Different from search.js because search.js handles search across all html pages that use the search function.
 */

import { search, searchPageNumber } from './search.js';

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
  // intiallize the sidebar
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

  const sidebarButton = navbarComponent.shadow.querySelector('.sidebar-button');
  sidebarButton.addEventListener('click', () => {
    if (!isMobile) {
      if (sidebarContent.style.display !== 'none') {
        const mainSection = document.querySelector('.search-page');
        mainSection.style.marginLeft = `${225}px`;
      } else {
        const mainSection = document.querySelector('.search-page');
        mainSection.style.marginLeft = `${0}px`;
      }
    }
  });

  // TODO: need to find a better way
  // fix the bug
  sidebarButton.click();
  if (isMobile) {
    sidebarButton.click();
  }

  const searchKeyword = document.querySelector('.search-word');
  const recipeSection = document.querySelector('.recipe-section');

  /**
   * This function parses the query string to retrieve relevant information
   * @param {none}
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
    console.log(results);

    // Clear the results before searching
    clearResults();

    // Add the recipes to the page
    // eslint-disable-next-line no-use-before-define
    searchKeyword.innerHTML = `"${inputList.query}"`;
    for (const recipe in results) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = results[recipe];
      recipeSection.appendChild(recipeCard);
    }
  }

  // Automatically parse the query string and run a search on page load
  const searchTerm = parseQueryString();
  let inputList = [];

  console.log(searchTerm);

  // Send a query to spoonacular
  inputList.query = searchTerm;
  inputList.number = 10;
  inputList.offset = 0;
  inputList['recipe-nutrition'] = 'true';
  inputList.cuisineFilter = '';
  inputList.dietFilter = '';
  inputList.timeFilter = '';
  inputList.typeFilter = '';
  search(inputList).then(showResults);

  // apply for the filter search
  const applyButton = sidebarContent.querySelector('.apply-filter');
  applyButton.addEventListener('click', () => {
    const checkboxesCuisine = sidebarContent.querySelectorAll('.cuisine');
    const checkboxesDiet = sidebarContent.querySelectorAll('.diet');
    const checkboxesTime = sidebarContent.querySelectorAll('.time');
    const checkboxesType = sidebarContent.querySelectorAll('.typeOfMeal');
    let cuisineFilter = '';
    let dietFilter = '';
    let timeFilter = '';
    let typeFilter = '';
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
    // if (timeFilter.length !== 0) timeFilter = timeFilter.substring(0, timeFilter.length - 1);
    if (typeFilter.length !== 0) typeFilter = typeFilter.substring(0, typeFilter.length - 1);
    inputList.cuisineFilter = cuisineFilter;
    inputList.dietFilter = dietFilter;
    inputList.timeFilter = timeFilter;
    inputList.typeFilter = typeFilter;
    search(inputList).then(showResults);
  });

  searchPageNumber(inputList).then((value) => {
    console.log(value);
  });

  // Section is for next and previous buttons
  const previousButton = document.querySelector('.previous-button');
  const nextButton = document.querySelector('.next-button');

  previousButton.disabled = true;

  previousButton.addEventListener('click', () => {
    inputList.offset -= 10;
    search(inputList).then(showResults);
    if (inputList.offset === 0) {
      previousButton.disabled = true;
    }
  });

  nextButton.addEventListener('click', () => {
    inputList.offset += 10;
    search(inputList).then(showResults);
    previousButton.disabled = false;
  });

  // eslint-disable-next-line func-names
  window.onresize = function () {
    const sidebarHeight = document.mainSection.scrollHeight;
    console.log(sidebarHeight);
    sidebarContent.style.height = sidebarHeight;
  };
}

window.addEventListener('DOMContentLoaded', init);
