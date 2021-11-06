/**
 * API key for connecting with Spoonatular API
 */
const apiKey = "aca18e34058e40fab4535153c6241f7f"
const tokenKey = '?apiKey=' + apiKey;

/**
 * when the use finish scrolling, it will add steppingz-size number of recipes at the end
 */
const stepping_size = 10;

const recipeData = {};

window.addEventListener('DOMContentLoaded', init);

async function init() {

    try {
        await fetch_random_recipes();
    } catch (err) {
        console.log(`Error fetching recipes: ${err}`);
        return;
    }

}

async function fetch_random_recipes() {
    return new Promise((resolve, reject) => {
        // for (let i = 0; i < stepping_size; i++) {

        // }

        fetch("https://api.spoonacular.com/recipes/random" + tokenKey + apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resolve(); 
            })
            .catch(err => {
                console.log(`Error loading the ${recipe} recipe`);
                reject(err);
            });
    });
}