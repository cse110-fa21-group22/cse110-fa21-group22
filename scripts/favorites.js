/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */

import { } from "../components/UserLocalStorage.js";
import { apiKey } from './apikey.js';

const tokenKey = '?apiKey=' + apiKey;

const storage = window.localStorage;
window.addEventListener('DOMContentLoaded', init);


async function init() {
    console.log("init function");

    const mainSection = document.querySelector(".favorites-page");

    for (let i = 0; i < localStorage.length; i++) {
        // get one list
        const userList = document.createElement('user-list');
        let arr_recipeid = JSON.parse(storage.getItem(localStorage.key(i)));
        // console.log("arr_recipeid = ", arr_recipeid);
        let recipe_arr = [];
        // iterate over the list, fetching all recipes 
        for (let recipeid of arr_recipeid) {
            recipe_arr.push(await getRecipebyID(recipeid));
        }
        userList.list = recipe_arr;
        userList.listName = localStorage.key(i);
        mainSection.appendChild(userList);
    }



    //testing 
    // let result = [];
    // let recipeSection = document.querySelector('.recipe-section');
    // for (let i = 0; i < 10; i++) {
    //     const recipeCard = document.createElement('recipe-card-component');
    //     recipeSection.appendChild(recipeCard);
    //     result.push(recipeCard);
    //     recipeCard.recipeCardSelect = false;
    // }
}

async function getRecipebyID(id) {
    const fetchEndPoint =
        'https://api.spoonacular.com/recipes/' +
        id + '/' + "information" + tokenKey +
        "&includeNutrition=false";


    // console.log("fetch_endpoint", fetchEndPoint);

    const fetchResults = await fetch(fetchEndPoint)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Fetch in favorite page failed');
            console.error(error);
        });

    // console.log("result is: ", fetchResults);
    return fetchResults;
}

let editMode = false;
let recipeCardSelect = false;
let editButton = document.getElementById('edit');
let cancelButton = document.getElementById('cancel');
let moveButton = document.getElementById('move');

editButton.addEventListener('click', function () {
    if (!editMode) {
        editMode = true;
        document.body.style.backgroundColor = '#EEEEEE';
        editButton.style.display = 'none';
        cancelButton.style.display = 'inline-block';
        moveButton.style.display = 'inline-block';

        let userListAll = document.querySelectorAll('user-list');
        console.log("editButton userListAll = ", userListAll);
        console.log("each user-llist = ", userListAll[1]);

        for (let i = 0; i < userListAll.length; i++) {
            let eachUserList = userListAll[i];
            let listTitles = eachUserList.shadow.querySelector('h4');
            let recipeCards = eachUserList.shadow.querySelectorAll('recipe-card-component'); 

            for (let t = 0; t < listTitles.length; t++) {
                listTitles[t].setAttribute('contenteditable', true);
            }
            for (let j = 0; j < recipeCards.length; j++) {
                recipeCards[j].enterSelectMode();
            }
        }

        //edit favorites list titles
        // let listTitles = document.querySelectorAll('h4');
        // for (let t = 0; t < listTitles.length; t++) {
        // 	listTitles[t].setAttribute('contenteditable', true);
        // }

        // make each recipe card into SelectMode
        // for (let i = 0; i < recipeCards.length; i++) {
        // 	recipeCards[i].enterSelectMode();
        // }

        recipeCardSelect = true;
    }
});

cancelButton.addEventListener('click', function () {
    if (editMode) {
        // cancel the edit mode
        editMode = false;
        document.body.style.backgroundColor = '#FFFFFF';
        editButton.style.display = 'inline-block';
        cancelButton.style.display = 'none';
        moveButton.style.display = 'none';

        let userListAll = document.querySelectorAll('user-list');
        console.log("editButton userListAll = ", userListAll);
        console.log("each user-llist = ", userListAll[1]);

        for (let i = 0; i < userListAll.length; i++) {
            let eachUserList = userListAll[i];
            let listTitles = eachUserList.shadow.querySelector('h4');
            let recipeCards = eachUserList.shadow.querySelectorAll('recipe-card-component'); 

            for (let t = 0; t < listTitles.length; t++) {
                listTitles[t].setAttribute('contenteditable', false);
            }
            for (let j = 0; j < recipeCards.length; j++) {
                recipeCards[j].exitSelectMode();
            }
        }

        // //edit favorites list titles
        // let listTitles = document.querySelectorAll('h4');
        // for (let t = 0; t < listTitles.length; t++) {
        //     listTitles[t].setAttribute('contenteditable', false);
        // }
        // for (let i = 0; i < recipeCards.length; i++) {
        //     recipeCards[i].exitSelectMode();
        // }
        // recipeCardSelect = false;
    }
});
