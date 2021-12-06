// 'favorites-master' is the default list
const store = window.localStorage;

/**
 * Initlize an local storage.This function should only be called once
 * @constructor
 */
export function initLocalStorage() {
  const arrTemp = [];
  store.setItem('favorites-master', JSON.stringify(arrTemp)); // Store all the recipes(hidden)
  store.setItem('My Favorites', JSON.stringify(arrTemp)); // Default recipe set
}

/**
 * Fetches from localstorage whether the recipe is already favorited or not
 * @param {object} recipeObj A recipe object
 * @return {boolean} Whether the recipe is already favorited
 */
export function checkFavorite(recipeObj) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (JSON.stringify(array[i]) === JSON.stringify(recipeObj)) {
      return true;
    }
  }
  return false;
}

/**
 * becuase differnet fetching from API returns object that has differnet field 
 * Using ID field from recipe object to compare equivilence 
 * @param {recipeObj} recipeObj 
 * @returns {boolean} true if recipeOBJ.id === any(master-favorite).id
 */
export function checkFavoritebyID(recipeObj) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    // compare two object by id 
    if (array[i].id === recipeObj.id) {
      return true;
    }
  }
  return false;
}

/**
 * Add one recipe object into the favorite-master list. 'favorite-master' list is the default list
 * @param {object} recipeObj A recipe object
 */
export function addRecipe(recipeObj) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (JSON.stringify(array[i]) === JSON.stringify(recipeObj)) {
      return;
    }
  }
  array.push(recipeObj);

  storage.setItem('favorites-master', JSON.stringify(array));
}

/**
 * Remove a recipe from favorite-master list
 * @param {object} recipeObj A recipe object
 */
export function removeRecipe(recipeObj) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (JSON.stringify(array[i]) === JSON.stringify(recipeObj)) {
      array.splice(i, 1);
      break;
    }
  }
  storage.setItem('favorites-master', JSON.stringify(array));
}

/**
 * API may return object that are not exactly the same
 * therefore, check ID for equivilence 
 * remove an recipe by ID 
 * @param {recipeObj} recipeObj  
 */
export function removeRecipebyID(recipeObj) {
  const storage = window.localStorage;
  const list = storage.getItem('favorites-master');

  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].id === recipeObj.id) {
      array.splice(i, 1);
      break;
    }
  }
  storage.setItem('favorites-master', JSON.stringify(array));
}


/**
 * create another list whose naem is listName.
 * when the listName is already a valid list, it will do nothing.
 * @param {string} listName name of the list
 */
export function createList(listName) {
  // Making sure that local storage does not already have it
  if (localStorage.getItem(listName)) return;

  console.log(`creating new list: ${listName}`);
  const tempArr = [];
  localStorage.setItem(listName, JSON.stringify(tempArr));
}

/**
 * remove a list whose name is listName.
 * do nothing when listName is not in the storage
 * @param {string} listName name of the list
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
 * @param {string} listName name of the list, must be in storage for it to function
 * @param {object} recipeObj id property of the recipe
 */
export function addRecipebyList(listName, recipeObj) {
  const storage = window.localStorage;

  createList(listName);
  console.log(storage.getItem(listName));
  const list = storage.getItem(listName);
  const array = JSON.parse(list);
  for (let i = 0; i < array.length; i += 1) {
    if (JSON.stringify(array[i]) === JSON.stringify(recipeObj)) {
      return;
    }
  }
  array.push(recipeObj);
  storage.setItem(listName, JSON.stringify(array));
}

/**
 * remove an recipe id from the list.
 * if the list is not found, do nothing
 * @param {string} listName name of the list
 * @param {object} recipeObj id property of the recipe
 */
export function removeRecipebyList(listName, recipeObj) {
  const storage = window.localStorage;
  if (storage.getItem(listName) != null) {
    const list = storage.getItem(listName);
    const array = JSON.parse(list);
    for (let i = 0; i < array.length; i += 1) {
      if (JSON.stringify(array[i]) === JSON.stringify(recipeObj)) {
        array.splice(i, 1);
        break;
      }
    }
    storage.setItem(listName, JSON.stringify(array));
  }
}

/**
 * remove an recipeObj from the list by the id of the recipe Obj
 * if the list is not found, do nothing
 * @param {string} listName name of the list
 * @param {object} recipeObj id property of the recipe
 */
 export function removeRecipebyListbyID(listName, recipeObj) {
  const storage = window.localStorage;
  if (storage.getItem(listName) != null) {
    const list = storage.getItem(listName);
    const array = JSON.parse(list);
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].id === recipeObj.id) {
        array.splice(i, 1);
        break;
      }
    }
    storage.setItem(listName, JSON.stringify(array));
  }
}