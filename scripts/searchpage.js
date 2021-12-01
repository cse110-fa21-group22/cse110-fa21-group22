/**
 * Handles the search page.
 *  Different from search.js because search.js handles search across all html pages that use the search function.
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
  // intiallize the sidebar
  const navbarComponent = document.querySelector('navbar-component');
  const sidebarContent = navbarComponent.shadow.querySelector('.sidebar-content');
  if (!isMobile && sidebarContent.style.display !== 'none') {
    sidebarContent.style.display = 'flex';
    sidebarContent.style.flexDirection = 'column';
    const mainSection = document.querySelector('.search-page');
    mainSection.style.marginLeft = `${225}px`;
  }
  if (!isMobile) {
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
  search(inputList).then(showResults);

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
}

window.addEventListener('DOMContentLoaded', init);
