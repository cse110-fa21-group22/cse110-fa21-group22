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
      <a href="/search.html">
        <p class="nav-search">Search</p>
      </a>
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
  }
}

customElements.define('navbar-component', Navbar);
