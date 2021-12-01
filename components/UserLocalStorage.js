// must have 'favorites-master'
const store = window.localStorage;

/**
 * initlize an local storage.
 * this function should only be called once
 */
export function initLocalStorage() {
  const arrTemp = [];
  store.setItem('favorites-master', JSON.stringify(arrTemp));
}

/*
 * Fetches from localstorage whether the recipe is already favorited or not
 * @return {boolean} whether the recipe is already favorited
 */
export function checkFavorite(recipeID) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i], 10) === parseInt(recipeID, 10)) {
      return true;
    }
  }
  return false;
}

/**
 * add one recipeID into the favorite-master list,
 * favorite-master list is the default list
 * @param {string} recipeID ID property of the recipe
 */
export function addRecipe(recipeID) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i], 10) === parseInt(recipeID, 10)) {
      return;
    }
  }
  array.push(parseInt(recipeID, 10));

  storage.setItem('favorites-master', JSON.stringify(array));
}

/**
 * Remove a recipe from favorite-master list
 * @param {*} recipeID ID property of the recipe
 */
export function removeRecipe(recipeID) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  const index = array.indexOf(parseInt(recipeID, 10));
  if (index > -1) {
    array.splice(index, 1);
  }

  storage.setItem('favorites-master', JSON.stringify(array));
}

/**
 * create another list whose naem is listName.
 * when the listName is already a valid list, it will do nothing.
 * @param {*} listName name of the list
 */
export function createList(listName) {
  // making sure that local storage does not alraedy have it
  if (localStorage.getItem(listName)) return;

  console.log(`creating new list: ${listName}`);
  const tempArr = [];
  localStorage.setItem(listName, JSON.stringify(tempArr));
}

/**
 * remove a list whose name is listName.
 * do nothing when listName is not in the storage
 * @param {*} listName name of the list
 */
export function removeList(listName) {
  const storage = window.localStorage;
  // making sure that local storage does not alraedy have it
  if (storage.getItem(listName) != null) {
    storage.removeItem(listName);
  }
}

/**
 * add a recipe ID to a specific listName.
 * if listName is not already in the storage, it will do nothing
 * @param {*} listName name of the list, must be in storage for it to function
 * @param {*} recipeID id property of the recipe
 */
export function addRecipebyList(listName, recipeID) {
  const storage = window.localStorage;

  createList(listName);
  console.log(storage.getItem(listName));
  const list = storage.getItem(listName);
  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i], 10) === parseInt(recipeID, 10)) {
      return;
    }
  }
  array.push(parseInt(recipeID, 10));
  storage.setItem(listName, JSON.stringify(array));
}

/**
 * remove an recipe id from the list.
 * if the list is not found, do nothing
 * @param {*} listName name of the list
 * @param {*} recipeID id property of the recipe
 */
export function removeRecipebyList(listName, recipeID) {
  const storage = window.localStorage;
  if (storage.getItem(listName) != null) {
    const list = storage.getItem(listName);
    const array = JSON.parse(list);
    const index = array.indexOf(parseInt(recipeID, 10));
    if (index > -1) {
      array.splice(index, 1);
    }
    storage.setItem(listName, JSON.stringify(array));
  }
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
