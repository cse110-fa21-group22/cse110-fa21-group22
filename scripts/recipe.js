/**
 * Handles the recipe page functionality. Recipe page is when the user clicks on a recipe and the actual full page with all information 
 * pulls up for it. 
 */

let favoriteIcon = document.querySelector('.recipe-favorite');
let isFavorite = false; //THIS DEPENDS ON THE STATE OF THE RECIPE TO BEGIN WITH

// If the favorite icon is clicked, favorite the item
favoriteIcon.addEventListener('click', (event) => {
    console.log('clicked favorite icon');
    if (!isFavorite) {
        isFavorite = true;
        favoriteIcon.src = '../assets/favorite-selected.svg';


        // add item to favorites list here
    } else {
        isFavorite = false;
        favoriteIcon.src = '../assets/favorite.svg';


        // remove item from favorites list here
    }
});

// Mouse hover for favorites icon
favoriteIcon.addEventListener('mouseover', function() {
    favoriteIcon.src = '../assets/favorite-selected.svg';
});

favoriteIcon.addEventListener('mouseout', function() {
    if (!isFavorite) {
        favoriteIcon.src = '../assets/favorite.svg';
    }
});