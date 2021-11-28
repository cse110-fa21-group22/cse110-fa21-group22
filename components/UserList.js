import { removeRecipebyList } from './UserLocalStorage.js';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/UserList.css';

const UserListTemplate = document.createElement('template');
UserListTemplate.innerHTML = `
  <div class="scroll">
    <div class="list-name">
      <h4>Favorites Recipes</h4>
      <button class="copy-here">Copy to This List</button>
    </div>
    <section class="recipe-section">
    </div>
  </div>`;

class UserList extends HTMLElement {
  set list(listObj) {
    const populateRrecipe = this.shadow.querySelector('.recipe-section');
    console.log('UserList component, ', listObj);

    for (const recipeid in listObj) {
      const recipeCard = document.createElement('recipe-card-component');
      recipeCard.recipe = listObj[recipeid];

      // let favoriteIcon = recipeCard.shadowRoot.querySelector('.recipe-favorite');
      // console.log("userList.js, favorite icon = ", favoriteIcon);

      populateRrecipe.appendChild(recipeCard);
      recipeCard.addEventListener('selected', (event) => {
        const innerEvent = new CustomEvent('selected', { detail: event.detail });
        this.dispatchEvent(innerEvent);
      });
      recipeCard.addEventListener('deselected', (event) => {
        const innerEvent = new CustomEvent('deselected', { detail: event.detail });
        this.dispatchEvent(innerEvent);
      });

      // Remove a recipe from localStorage and the userList when it is deleted
      recipeCard.addEventListener('removed', (event) => {
        removeRecipebyList(this.name, event.detail);
        recipeCard.remove();
      });
      this.cardList.push(recipeCard);
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

  get list() {
    return this.cardList;
  }

  set listName(name) {
    this.name = name;
    const listTitle = this.shadow.querySelector('.list-name h4');
    listTitle.textContent = name;
  }

  get listName() {
    return this.name;
  }

  constructor() {
    super();
    this.cardList = [];
    this.name = '';
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(UserListTemplate.content.cloneNode(true));
    this.shadow.appendChild(link.cloneNode(true));
  }

  // connectedCallback() {}
}

customElements.define('user-list', UserList);
