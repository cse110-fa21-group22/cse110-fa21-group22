/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */

import { storage } from "/components/UserLocalStorage.js";

window.addEventListener('DOMContentLoaded', init);


function init() {
    console.log("init function"); 
    console.log(storage); 

    const mainSection = document.querySelector(".main"); 
    const userList = document.createElement('user-list'); 
    userList.list = storage['favorite-master']; 
    userList.listName = 'favorite-master'; 
    mainSection.appendChild(userList); 
}