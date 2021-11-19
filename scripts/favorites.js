/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */

 import { } from "../components/UserLocalStorage.js";
//  window.addEventListener('DOMContentLoaded', init);

/**
 * A TEST FUNCTION FOR POPULATING RECIPES ON FAVORITES PAGE
 * @return {array} of the recipe cards
 */
function populateRecipeSection() {
	// Add the recipes to the page
    let result = [];
    // old version html use .recipe-section
    // let recipeSection = document.querySelector('.recipe-section');
    let recipeSection = document.querySelector('.recipe-list');
    for (let i = 0; i < 10; i++) {
        const recipeCard = document.createElement('recipe-card-component');
        recipeSection.appendChild(recipeCard);
        result.push(recipeCard);
        recipeCard.recipeCardSelect = false;
    }
    return result;
}

async function getRecipebyID(id) {
	const fetchEndPoint =
		'https://api.spoonacular.com/recipes/' +
		id + '/' + "information" + tokenKey + 
		"&includeNutrition=false"; 
		 

	console.log("fetch_endpoint", fetchEndPoint); 

	const fetchResults = await fetch(fetchEndPoint)
		.then((response) => response.json())
		.catch((error) => {
			console.error('Fetch in homepage failed');
			console.error(error);
		});

	console.log("result is: ", fetchResults);
	return fetchResults;
}



let editMode = false;
let recipeCardSelect = false;
let editButton = document.getElementById('edit');
let cancelButton = document.getElementById('cancel');
let moveButton = document.getElementById('move');

editButton.addEventListener('click', function() {
    if (!editMode) {
        editMode = true;
        document.body.style.backgroundColor = '#EEEEEE';
        editButton.style.display = 'none';
        cancelButton.style.display = 'inline-block';
        moveButton.style.display = 'inline-block';
        //edit favorites list titles
        let listTitles = document.querySelectorAll('h4');
        for (let t = 0; t < listTitles.length; t++) {
            listTitles[t].setAttribute('contenteditable', true);
        }
        for (let i = 0; i < recipeCards.length; i++) {
            recipeCards[i].enterSelectMode();
        }
        recipeCardSelect = true;
    }
});

cancelButton.addEventListener('click', function() {
    if (editMode) {
        // cancel the edit mode
        editMode = false;
        document.body.style.backgroundColor = '#FFFFFF';
        editButton.style.display = 'inline-block';
        cancelButton.style.display = 'none';
        moveButton.style.display = 'none';
        //edit favorites list titles
        let listTitles = document.querySelectorAll('h4');
        for (let t = 0; t < listTitles.length; t++) {
            listTitles[t].setAttribute('contenteditable', false);
        }
        for (let i = 0; i < recipeCards.length; i++) {
            recipeCards[i].exitSelectMode();
        }
        recipeCardSelect = false;
    }
});