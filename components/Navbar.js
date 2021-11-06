const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = '../styles/navbar.css'; 

const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
  <nav class="navbar">
    <a href="/webpages/home.html">
      <h1 class="logo">iCook</h1>
    </a>
    <div class="nav-search">
      <img class="nav-search-icon" src="../assets/search.svg" alt="search" />
      <input class="nav-search-input" type='text' placeholder="Search" />
    </div>
    <a class="nav-favorite" href="/webpages/favorite.html">
      <p>Favorite</p>
    </a>
    <a class="nav-favorite-mobile" href="/webpages/favorite.html">
      <img src="../assets/favorite.svg" alt="favorite" />
    </a>
    </nav>
`

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.appendChild(link);
    this.shadow.appendChild(navbarTemplate.content);

    //Desktop Functionality
    let searchTerm = '';
    let inputList = [];

    
    const searchInput = this.shadow.querySelector('.nav-search').querySelector('input');

    searchInput.addEventListener('keyup', (event) => {
      searchTerm = event.target.value;
      inputList['query'] = searchTerm;
      inputList['number'] = 20;
      inputList['offset'] = 0;
      inputList['recipe-nutrition'] = 'true';

      if (event.code == 'Enter') { 
        const searchSubmitEvent = new CustomEvent('submit', {detail:inputList});
        this.shadow.dispatchEvent(searchSubmitEvent);
      }
    })
  }
}

customElements.define('navbar-component', Navbar);