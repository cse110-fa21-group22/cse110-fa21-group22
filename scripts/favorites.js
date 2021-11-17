/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */


let editMode = false;
let editButton = document.getElementById('edit');
let cancelButton = document.getElementById('cancel');
let moveButton = document.getElementById('move');


/**
 * A TEST FUNCTION FOR POPULATING RECIPES ON FAVORITES PAGE
 * @return {array} of the recipe cards
 */
function populateRecipeSection() {
	// Add the recipes to the page
    let result = [];
    for (let i = 0; i < 10; i++) {
        const recipeCard = document.createElement('recipe-card-component');
        recipeSection.appendChild(recipeCard);
        result.push(recipeCard);
    }
}

editButton.addEventListener('click', function() {
    if (editMode) {
        // edit mode was already true
    } else {
        console.log('edit mode activated');
        editMode = true;
        document.body.style.backgroundColor = '#DDDDDD';
        editButton.style.display = 'none';
        cancelButton.style.display = 'inline-block';
        moveButton.style.display = 'inline-block';

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
    } else {
        // edit mode has already been cancelled
    }
});
