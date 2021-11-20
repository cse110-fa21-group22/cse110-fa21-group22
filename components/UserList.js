const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/UserList.css';

const UserListTemplate = document.createElement('template');
UserListTemplate.innerHTML = `
        <div class="scroll">
            <div class="list-name">
                <h4>Favorites Recipes</h4>
            </div>
            <div class="recipe-section">
                
            </div>
        </div>`;

class UserList extends HTMLElement {

    set list(listObj) {

        const populateRrecipe = this.shadow.querySelector('.recipe-section');
        console.log("UserList component, ", listObj);

        for (let recipeid in listObj) {
            const recipeCard = document.createElement('recipe-card-component');
            recipeCard.recipe = listObj[recipeid];

            let favoriteIcon = recipeCard.shadowRoot.querySelector('.recipe-favorite');
            console.log("userList.js, favorite icon = ", favoriteIcon);
            

            populateRrecipe.appendChild(recipeCard);
        }


        // let RecipeCard = this.shadow.querySelectorAll('recipe-card-component'); 
        // RecipeCard.forEach(function(card) {
        //     console.log("inside the for loop"); 
        //     let favoriteIcon = card.shadowRoot.querySelector('.recipe-favorite');
        //     favoriteIcon.click(); 
        // }); 

        // testing
        // const recipeCard = document.createElement('recipe-card-component');
        // populateRrecipe.appendChild(recipeCard);
    }

    set listName(name) {
        const listTitle = this.shadow.querySelector('.list-name h4');
        listTitle.textContent = name;
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(UserListTemplate.content.cloneNode(true));
        this.shadow.appendChild(link.cloneNode(true));
    }

    connectedCallback() { }
}

customElements.define('user-list', UserList);
