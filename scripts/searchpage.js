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
}

window.addEventListener('DOMContentLoaded', init);
