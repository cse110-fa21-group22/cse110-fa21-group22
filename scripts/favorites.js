/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */
import {apiKey} from './apikey.js';
const tokenKey = '?apiKey=' + apiKey;

const favorites_list_id = [631823, 637876];

window.addEventListener('DOMContentLoaded', init);


/**
 * This will work with one recipe. Needs eventually work for multiple favorite recipes.
 * This duplicates the same recipe.
 */
function init() {
    async function searchFavorites(favorites_list_id) {
        //const results = [];

        
        // Create the fetch url
        // this is hard coded and needs to be changed
        const searchUrl = 'https://api.spoonacular.com/recipes/631823/information';
        
        const fetchEndpoint =
            searchUrl + tokenKey; 
    
        //console.log(fetchEndpoint);
    
        // fetch the data
    
        const fetchResults = await fetch(fetchEndpoint)
            .then((response) => response.json())
            .catch((error) => {
                console.error('Fetch in search function failed');
                console.error(error);
            });
    
        const results = fetchResults;
        console.log(results);
        return results;
    }
    
    function showFavorites(favorites_results) {
        console.log(favorites_results);
        const recipeSection = document.querySelector('.recipe-section');
        // Clear the results before searching
        //clearResults();
    
        // Add the recipes to the page
        
        for (const recipe in favorites_results) {
            const recipeCard = document.createElement('recipe-card-component');
            recipeCard.recipe = favorites_results;
            recipeSection.appendChild(recipeCard);
        }
    }
    searchFavorites(favorites_list_id).then(showFavorites);
}



