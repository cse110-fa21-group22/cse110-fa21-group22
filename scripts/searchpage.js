/**
 * Handles the search page.
 *  Different from search.js because search.js handles search across all html pages that use the search function.
 */

import { search } from './search.js';

 window.addEventListener('DOMContentLoaded', init);

 /**
  * Initializes the search page
  * Automatically extracts data from the query string and runs a search
  */
 function init () {
    const searchKeyword = document.querySelector('.search-word'); 
    const recipeSection = document.querySelector('.recipe-section'); 

    /**
     * Parses the query string to retrieve relevant information
     * @returns {string} the user's search term
     */
    function parseQueryString() {
        let queryString = window.location.search;
        
        // Get rid of '?search='
        let searchTerm = queryString.substring(8);

        // Convert string back to original formatting, with disallowed characters gone
        searchTerm = searchTerm.replaceAll('+', ' ').replaceAll('-', '');
        return searchTerm;
    }

    /**
     * Clears the results on the search page
     */
    function clearResults() {
        while (recipeSection.firstChild) {
            recipeSection.removeChild(recipeSection.firstChild);
        }
    }

    /**
     * Shows the search results on the page
     * @param {object} results 
     */
    function showResults(results) {
        console.log(results);

        // Clear the results before searching
        clearResults();

        // Add the recipes to the page
        searchKeyword.innerHTML = '\"' + inputList['query'] + '\"';
        for (const recipe in results) { 
            const recipeCard = document.createElement('recipe-card-component')
            recipeCard.recipe = results[recipe];
            recipeSection.appendChild(recipeCard);
        }
    }
    
    // Automatically parse the query string and run a search on page load
    let searchTerm = parseQueryString();
    let inputList = []

    console.log(searchTerm);

    // Send a query to spoonacular
    inputList['query'] = searchTerm;
    inputList['number'] = 10;
    inputList['offset'] = 0;
    inputList['recipe-nutrition'] = 'true';
    search(inputList).then(showResults);
 }

 
