/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */

 import { } from "../components/UserLocalStorage.js";
 window.addEventListener('DOMContentLoaded', init);


function init() {
    console.log("init function"); 

    const mainSection = document.querySelector(".main"); 
    const userList = document.createElement('user-list'); 
    
    userList.list = storage['favorite-master']; 
    userList.listName = 'favorite-master'; 
    mainSection.appendChild(userList); 

    
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
        for (let i = 0; i < recipeCards.length; i++) {
            recipeCards[i].exitSelectMode();
        }
        recipeCardSelect = false;
    }
});

