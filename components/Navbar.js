const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/navbar.css';

// Add a new button for the sidebar
const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
	<nav class="navbar">
    <a class="sidebar-button">
      <img class="sidebar-icon" src="../assets/sidebar.svg" alt="sidebar"></img>
    </a>
    <div class="navbar-section">
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
    </div>
	</nav>
  <section class="sidebar-content">
    <h5>Cuisine</h5>
    <ul>
      <li><input type="checkbox" id="american" class="cuisine"> American</li>
      <li><input type="checkbox" id="chinese" class="cuisine"> Chinese</li>
      <li><input type="checkbox" id="italian" class="cuisine"> Italian</li>
      <li><input type="checkbox" id="mexican" class="cuisine"> Mexican</li>
      <li><input type="checkbox" id="indian" class="cuisine"> Indian</li>
      <li><input type="checkbox" id="thai" class="cuisine"> Thai</li>
    </ul>
    <h5>Diet</h5>
    <ul>
      <li><input type="checkbox" id="vegetarian" class="diet"> Vegetarian</li>
      <li><input type="checkbox" id="vegan" class="diet"> Vegan</li>
      <li><input type="checkbox" id="gluten%20free" class="diet"> Gluten Free</li>
      <li><input type="checkbox" id="paleo" class="diet"> Paleo</li>
      <li><input type="checkbox" id="ketogenic" class="diet"> Ketogenic</li>
    </ul>
    <h5>Time</h5>
    <ul>
      <li><input type="checkbox" id="15" class="time"> 0-15 Minutes</li>
      <li><input type="checkbox" id="30" class="time"> 0-30 Minutes</li>
      <li><input type="checkbox" id="45" class="time"> 0-45 Minutes</li>
      <li><input type="checkbox" id="60" class="time"> 0-1hr</li>
      <li><input type="checkbox" id="9999" class="time"> 0-9999hr</li>
    </ul>
    <h5>Type of Meal</h5>
    <ul>
      <li><input type="checkbox" id="breakfast" class="typeOfMeal"> Breakfast</li>
      <li><input type="checkbox" id="main%20course" class="typeOfMeal"> Main Course</li>
      <li><input type="checkbox" id="dessert" class="typeOfMeal"> Dessert</li>
      <li><input type="checkbox" id="drink" class="typeOfMeal"> Drink</li>
    </ul>
    <button class="apply-filter">Apply filter</button>
    <button class="sidebar-filter">Search this</button>
	</section>`;

class Navbar extends HTMLElement {
  /**
   * Contructor for the Navbar class
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.isSidebarShow = false;
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
    const searchInput = this.shadow.querySelector('.nav-search').querySelector('input');

    searchInput.addEventListener('keyup', (event) => {
      searchTerm = event.target.value;

      if (event.code === 'Enter') {
        window.location.href = `search.html${this.generateQueryString(searchTerm)}`;
      }
    });

    const sidebarButton = this.shadow.querySelector('.sidebar-button');
    sidebarButton.addEventListener('click', () => {
      const sidebarContent = this.shadow.querySelector('.sidebar-content');
      if (!this.isSidebarShow) {
        sidebarContent.style.display = 'flex';
        sidebarContent.style.flexDirection = 'column';
        this.isSidebarShow = true;
      } else {
        sidebarContent.style.display = 'none';
        this.isSidebarShow = false;
      }
    });
  }
}

customElements.define('navbar-component', Navbar);
