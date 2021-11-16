export const storage = {};

storage['favorite-master'] = {};

storage.addToList = function (ListName, recipeID) {
    localStoragetoStorage();
    storage[ListName].push(recipeID);
    StoragetoLocalStorage();
}

storage.removeFromList = function (ListName, recipeID) {
    localStoragetoStorage();
    if (storage[ListName] != undefined) {
        delete storage[ListName][recipeID];
    }
    StoragetoLocalStorage();
}

storage.createList = function (ListName) {
    localStoragetoStorage();
    if (storage[ListName] == undefined) {
        storage[ListName] = {};
    }
    StoragetoLocalStorage();
}

storage.removeList = function (ListName) {
    localStoragetoStorage();
    if (storage[ListName] != undefined) {
        delete storage[ListName];
    }
    StoragetoLocalStorage();
}

storage.addRecipe = function (recipeOBJ) {
    // console.log(recipeOBJ); 
    localStoragetoStorage();
    storage['favorite-master'][recipeOBJ.id] = recipeOBJ;
    StoragetoLocalStorage();
}

storage.removeRecipe = function (recipeID) {
    localStoragetoStorage();
    delete storage['favorite-master'][recipeID];
    StoragetoLocalStorage();
}

function StoragetoLocalStorage() {
    for (list in storage) {
        localStorage.setItem(list, JSON.stringify(storage[list]));
    }
}

function localStoragetoStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        storage[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
}