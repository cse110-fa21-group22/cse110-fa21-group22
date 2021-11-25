const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/navbar.css';

// Add a new button for the sidebar
const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
	<nav class="navbar">
    <button class="sidebar">
      <img class="sidebar-icon" src="../assets/home.svg" alt="siderbar"></img>
    </button>
		<a href="/webpages/home.html">
			<h1 class="logo">iCook</h1>
		</a>
		<div class="nav-search">
			<img class="nav-search-icon" src="../assets/search.svg" alt="search" />
			<input class="nav-search-input" type='text' placeholder="Search" />
		</div>
		<a class="nav-favorite" href="/webpages/favorite.html">
			<p>Favorites</p>
		</a>
		<a class="nav-favorite-mobile" href="/webpages/favorite.html">
			<img src="../assets/favorite.svg" alt="favorite" />
		</a>
	</nav>
`;

class Navbar extends HTMLElement {
  /**
   * Contructor for the Navbar class
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  /**
   * Generates a query string to pass the search to the search page
   * @param {string} searchTerm the user's search phrase
   * @return {string} the query string
   */
  // eslint-disable-next-line class-methods-use-this
  generateQueryString(searchTerm) {
    let queryString = '?search=';
    for (let i = 0; i < searchTerm.length; i += 1) {
      const currChar = searchTerm.charAt(i);
      const currCharCode = searchTerm.charCodeAt(i);
      console.log(currChar);
      // Allow all letters and numbers to enter the query
      if ((currCharCode >= 65 && currCharCode <= 90) || (currCharCode >= 97 && currCharCode <= 122) || (currCharCode >= 48 && currCharCode <= 57)) {
        queryString += currChar;
        // Spaces become + signs
      } else if (currCharCode === '32') {
        queryString += '+';
        // All other characters become - signs
      } else {
        queryString += '-';
      }
    }
    return queryString;
  }

  connectedCallback() {
    this.shadow.appendChild(link);
    this.shadow.appendChild(navbarTemplate.content);

    // Desktop Functionality
    let searchTerm = '';
    // let inputList = [];

    const searchInput = this.shadow.querySelector('.nav-search').querySelector('input');

    searchInput.addEventListener('keyup', (event) => {
      searchTerm = event.target.value;

      if (event.code === 'Enter') {
        window.location.href = `search.html${this.generateQueryString(searchTerm)}`;
      }
    });
  }
}

customElements.define('navbar-component', Navbar);
