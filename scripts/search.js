const apiKey = 'bcccf988c95c45ef9b53310545b3989a';
const tokenKey = '?apiKey=' + apiKey;

window.addEventListener('DOMContentLoaded', init);



function init () { 
    const navbar = document.querySelector('navbar-component');
    const searchKeyword = document.querySelector('.search-word'); 
    const recipeSection = document.querySelector('.recipe-section'); 
    
    navbar.shadowRoot.addEventListener('submit', (event) => {
        search(event.detail);
    })

    // This is just for testing
    window.addEventListener('keyup', (event) => {
        if (event.code == 'Escape') {
            clear();
        }
    })

    async function search(inputList) { 
        clear();
        const searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
        const tokenSearchInput = '&query=' + inputList['query'];
        const tokenNumResults = '&number=' + inputList['number'];
        const tokenOffset = '&offset=' + inputList['offset'];
        const tokenNutritionBool = '&addRecipeNutrition=' + inputList['recipe-nutrition'];
        const fetchEndpoint = searchUrl + tokenKey + tokenSearchInput + tokenNumResults + tokenOffset ;//+ tokenNutritionBool;

        console.log(fetchEndpoint);
        
        let json;
        try {
            const data = await fetch(fetchEndpoint);
            json = await data.json();
        } catch (error) { 
            console.error(error); 
        }
        const results  = json.results;
    
        searchKeyword.innerHTML = '\"' + inputList['query'] + '\"';
        
        console.log(results);

        for (const recipe in results) { 
            const recipeCard = document.createElement('recipe-card-component')
            recipeCard.recipe = results[recipe];
            recipeSection.appendChild(recipeCard);
        }
    
    }

    function clear() { 
        while (recipeSection.firstChild) {
            recipeSection.removeChild(recipeSection.firstChild);
        }
        
    }
}