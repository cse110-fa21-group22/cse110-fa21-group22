/**
 * API key for connecting with Spoonatular API
 */
// import {apiKey} from './apikey.js';
const apiKey = '8581385ca4af4148b1a78b5ef23e5b8c'; 
import {storage} from "/components/UserLocalStorage.js"; 

const tokenKey = '?apiKey=' + apiKey;

const stepping_size = 2; // Stepping-size number of recipes to append to end after user scrolls to bottom
const recipeData = {}; // Data in each stepping size?
const recipeSection = document.querySelector('.home-page-popular-recipe-list'); // Where to place recipe cards
const userFavoriteSection = document.querySelector('.home-page-favorite-section'); 

window.addEventListener('DOMContentLoaded', init);
async function init() {
	//console.log('Init.. ');
	//console.log('Fetching recipes...');
	try {
		await fetch_random_recipes();
	} catch (err) {
		//console.log(`Error fetching recipes: ${err}`);
		return;
	}

	/**
	 * design:
	 * display 10 cards each time, when user a card, display another 10 random
	 */
	//console.log(recipeData);
	showResults(recipeData);

	var button = document.querySelector('.home-page-popular-refresh');
	button.addEventListener('click', async function () {
		clearObject();
		try {
			await fetch_random_recipes();
		} catch (err) {
			console.log(`Error fetching recipes: ${err}`);
			return;
		}
		showResults(recipeData);
	});

	// populating local storage 
	// console.log(storage); 
	// var try_delete; 
	// for(let a in recipeData) {
	// 	try_delete = a; 
	// 	break; 
	// }
	// storage.removeRecipe(try_delete); 

	showFavoriteSection(); 
}

async function fetch_random_recipes() {
	return new Promise((resolve, reject) => {
		// use 1 for now, save some points for querying
		const fetchResults =
			'https://api.spoonacular.com/recipes/random' +
			tokenKey +
			'&number=' +
			stepping_size;
		//console.log(fetchResults);

		fetch(fetchResults)
			.then((response) => response.json())
			.then((data) => {
				// change the 0
				// need to be a for loop and put them into recipeData;
				// console.log(data);
				// console.log(data.recipes[0].id);
				for (let i = 0; i < parseInt(stepping_size); i++) {
					recipeData[data.recipes[i].id] = data.recipes[i];
					// testign 
					storage.addRecipe(data.recipes[i]); 
				}
				resolve();
			})
			.catch((err) => {
				console.log('Error loading the recipe');
				reject(err);
			});
	});
}

/**
 * Shows the search results on the page from a JSON array 'results' containing recipe objects
 * @param {object} results
 */
function showResults(results) {
	//console.log(results);

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
 * Clear the recipe cards from the recipe section element
 */
function clearResults() {
	while (recipeSection.firstChild) {
		recipeSection.removeChild(recipeSection.firstChild);
	}
}

/**
 * clear out recipeData
 */
function clearObject() {
	for (var member in recipeData) delete recipeData[member];
}

function showFavoriteSection(){
	for (const recipeid in storage['favorite-master']) {
		const recipeCard = document.createElement('recipe-card-component');
		recipeCard.recipe = storage['favorite-master'][recipeid];
		userFavoriteSection.appendChild(recipeCard);
	}
}