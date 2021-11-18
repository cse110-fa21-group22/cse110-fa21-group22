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
