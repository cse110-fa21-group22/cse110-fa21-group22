/**
 * Handles favorites page functionality and storing the recipes a user favorites.
 */


/**
 * A TEST FUNCTION FOR POPULATING RECIPES ON FAVORITES PAGE
 * @return {array} of the recipe cards
 */
function populateRecipeSection() {
	// Add the recipes to the page
    let result = [];
    let recipeSection = document.querySelector('.recipe-section');
    for (let i = 0; i < 10; i++) {
        const recipeCard = document.createElement('recipe-card-component');
        recipeSection.appendChild(recipeCard);
        result.push(recipeCard);
        recipeCard.recipeCardSelect = false;
    }
    return result;
}
let recipeCards = populateRecipeSection();


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
