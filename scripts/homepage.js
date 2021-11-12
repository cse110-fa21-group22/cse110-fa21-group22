/**
 * API key for connecting with Spoonatular API
 */
const apiKey = "aca18e34058e40fab4535153c6241f7f"
const tokenKey = '?apiKey=' + apiKey;


const stepping_size = 4;                                        // Stepping-size number of recipes to append to end after user scrolls to bottom
const recipeData = {};                                           // Data in each stepping size?   
const recipeSection = document.querySelector('.recipe-section'); // Where to place recipe cards

window.addEventListener('DOMContentLoaded', init);
async function init() {
    console.log("Init.. ");
    // console.log("Fetching recipes...");
    // try {
    //     await fetch_random_recipes();
    // } catch (err) {
    //     console.log(`Error fetching recipes: ${err}`);
    //     return;
    // }

    // /**
    //  * design: 
    //  * display 10 cards each time, when user a card, display another 10 random 
    //  */
    // console.log(recipeData); 
    // showResults(recipeData); 
}

async function fetch_random_recipes() {
    return new Promise((resolve, reject) => {
        // use 1 for now, save some points for querying
        const fetchResults = "https://api.spoonacular.com/recipes/random" + tokenKey + "&number=" + stepping_size;
        console.log(fetchResults); 

        fetch(fetchResults)
            .then(response => response.json())
            .then(data => {
                // change the 0 
                // need to be a for loop and put them into recipeData; 
                // console.log(data);
                // console.log(data.recipes[0].id); 
                for (let i = 0; i < parseInt(stepping_size); i ++){
                    recipeData[data.recipes[i].id] = data.recipes[i]; 
                }
                resolve(); 
            })
            .catch(err => {
                console.log(`Error loading the recipe`);
                reject(err);
            });
    });
}


/**
 * Shows the search results on the page from a JSON array 'results' containing recipe objects
 * @param {object} results 
 */
function showResults(results) {
    console.log(results);

    // Clear the results before searching
    clearResults();

    // Add the recipes to the page
    for (const recipe in results) { 
        const recipeCard = document.createElement('recipe-card-component')
        recipeCard.recipe = results[recipe];
        recipeSection.appendChild(recipeCard);
    }
}

/**
 * Clear the recipe cards from the recipe section element
 */
function clearResults() {
    while (recipeSection.firstChild) {
        recipeSection.removeChild(recipeSection.firstChild);
    }
}
/**
 * Show and hide the sidebar
 */
 let hidden = false;
 let barComp = document.querySelector('navbar-component').shadowRoot.querySelector('#categories-button');
 barComp.addEventListener('click', (event) =>{
    console.log("Button pressed");

    // Add in CSS so that the code below switches the sidebar on and off

    // let wrapperDiv = document.querySelector("#middle");
    // // https://codepen.io/roopepal/pen/EPGxKQ for animations!
    //     if(hidden) {
    //         // Add categories
    //         wrapperDiv.style.gridTemplateColumns = "[categories] 10% [other] auto";
    //         document.querySelector("#middle1").style.visibility = "visible";
    //     } else {
    //         // Remove categories 
    //         wrapperDiv.style.gridTemplateColumns = "[categories] 0% [other] auto";
    //         document.querySelector("#middle1").style.visibility = "hidden";
    //     }
    // hidden = !hidden;
 });


