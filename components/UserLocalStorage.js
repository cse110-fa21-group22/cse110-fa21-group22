
// must have 'favorites-master'
const store = window.localStorage; 
var arr_temp = []; 
store.setItem('favorites-master', JSON.stringify(arr_temp)); 


export function addRecipe(recipeID) {
    const storage = window.localStorage;
    var list = storage.getItem('favorites-master'); 

    var array = JSON.parse(list);
    array.push(recipeID); 

    storage.setItem('favorites-master', JSON.stringify(array)); 
}







// export const storage = {};
// const functions = ["addToList", "removeFromList", "createList", "removeList", "addRecipe", "removeRecipe"]; 
// const dataHolder = {}; 

// // holds the data, an array of ids
// dataHolder['favorite-master'] = [];

// storage.addToList = function (ListName, recipeID) {
//     localStoragetoStorage();
//     dataHolder[ListName].push(recipeID);
//     StoragetoLocalStorage();
// }

// storage.removeFromList = function (ListName, recipeID) {
//     localStoragetoStorage();
//     if (dataHolder[ListName] != undefined) {
//         delete dataHolder[ListName][recipeID];
//     }
//     StoragetoLocalStorage();
// }

// storage.createList = function (ListName) {
//     localStoragetoStorage();
//     if (dataHolder[ListName] == undefined) {
//         dataHolder[ListName] = {};
//     }
//     StoragetoLocalStorage();
// }

// storage.removeList = function (ListName) {
//     localStoragetoStorage();
//     if (dataHolder[ListName] != undefined) {
//         delete dataHolder[ListName];
//     }
//     StoragetoLocalStorage();
// }

// storage.addRecipe = function (recipeID) {
//     // console.log(recipeOBJ); 
//     localStoragetoStorage();
//     dataHolder['favorite-master'][recipeOBJ.id] = JSON.parse(recipeOBJ);
//     StoragetoLocalStorage();
// }

// storage.removeRecipe = function (recipeID) {
//     localStoragetoStorage();
//     delete dataHolder['favorite-master'][recipeID];
//     StoragetoLocalStorage();
// }

// function StoragetoLocalStorage() {
//     for (let list in dataHolder) {
//         localStorage.setItem(list, JSON.stringify(JSON.parse(dataHolder[list])));
//     }
// }

// function localStoragetoStorage() {
//     for (let i = 0; i < localStorage.length; i++) {
//         if(functions.includes(localStorage.key(i)) == false){
//             dataHolder[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
//         }
//     }
// }