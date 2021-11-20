/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */

import { addRecipebyList } from "../components/UserLocalStorage.js";
import { apiKey } from './apikey.js';

const tokenKey = '&apiKey=' + apiKey;

const storage = window.localStorage;
let recipeLists = [];
let selectedRecipes = [];
window.addEventListener('DOMContentLoaded', init);


async function init() {
    console.log("init function");

    const mainSection = document.querySelector(".favorites-page");

    for (let i = 0; i < localStorage.length; i++) {
        // get one list
        const userList = document.createElement('user-list');
        let arr_recipeid = JSON.parse(storage.getItem(localStorage.key(i)));
        console.log("arr_recipeid = ", arr_recipeid);

        
        let recipe_arr = await getRecipeArr(arr_recipeid);
        userList.list = recipe_arr;
        userList.listName = localStorage.key(i);
        userList.addEventListener('selected', (event) => {
            selectedRecipes.push(event.detail);
            console.log(selectedRecipes);
        });
        userList.addEventListener('deselected', (event) => {
            selectedRecipes.pop(event.detail);
            console.log(selectedRecipes);
        });
        mainSection.appendChild(userList);
        recipeLists.push(userList);
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

async function getRecipeArr(id_arr) {
    const fetchEndPoint =
        'https://api.spoonacular.com/recipes/informationBulk?ids=' +
        id_arr.join(',') + tokenKey;


    console.log("fetch_endpoint", fetchEndPoint);

    const fetchResults = await fetch(fetchEndPoint)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Fetch in favorite page failed');
            console.error(error);
        });

    console.log("result is: ", fetchResults);
    return fetchResults;
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
let editButton = document.getElementById('edit');
let cancelButton = document.getElementById('cancel');
let moveButton = document.getElementById('move');

editButton.addEventListener('click', () => {
	if (editMode) return;
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
    for (const list of recipeLists) {
        for (let i = 0; i < list.list.length; i++) {
            list.list[i].enterSelectMode();
        }
    }
});

cancelButton.addEventListener('click', () => {
	if (!editMode) return; 
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
    for (const list of recipeLists) {
        for (let i = 0; i < list.list.length; i++) {
            list.list[i].exitSelectMode();
        }
    }
});

moveButton.addEventListener('click', () => {
    if (!editMode) return;
    const modal = document.querySelector('.modal');
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'favorites-master' || localStorage.key(i) === 'My Favorites ') continue;
        const button = document.createElement('button');
        button.innerHTML = localStorage.key(i);
        button.addEventListener('click', () => {
            for (const id of selectedRecipes) {
                addRecipebyList(localStorage.key(i), id);
            }
            document.location.reload(true);
        })
        modal.appendChild(button);
    }
    modal.style.display = "block";

});
