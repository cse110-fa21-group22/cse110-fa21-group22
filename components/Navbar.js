const link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'styles/navbar.css'; 

const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
  <nav class="navbar">
    <a href="/">
      <div class="logo">Logo</div>
    </a>
    <div class="navbar-routes">
      <img src="assets/search.svg" alt="search" />
      <div class='nav-search'>
        <input 
          type='text'
          placeholder="Search"
        />
      </div>
      <a href="/favorite.html">
        <p class="nav-favorite">Favorite</p>
      </a>
      <a href="/search.html">
        <img class="nav-search-mobile" src="assets/search.svg" alt="search" />
      </a>
      <a href="/favorite.html">
        <img class="nav-favorite-mobile" src="assets/favorite.svg" alt="favorite" />
      </a>
    </div>
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
