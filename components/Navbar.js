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
      <li><input type="checkbox" id="american" class="cuisine cuisine0"> American</li>
      <li><input type="checkbox" id="chinese" class="cuisine cuisine1"> Chinese</li>
      <li><input type="checkbox" id="italian" class="cuisine cuisine2"> Italian</li>
      <li><input type="checkbox" id="mexican" class="cuisine cuisine3"> Mexican</li>
      <li><input type="checkbox" id="indian" class="cuisine cuisine4"> Indian</li>
      <li><input type="checkbox" id="thai" class="cuisine cuisine5"> Thai</li>
    </ul>
    <h5>Diet</h5>
    <ul>
      <li><input type="checkbox" id="vegetarian" class="diet diet0"> Vegetarian</li>
      <li><input type="checkbox" id="vegan" class="diet diet1"> Vegan</li>
      <li><input type="checkbox" id="gluten%20free" class="diet diet2"> Gluten Free</li>
      <li><input type="checkbox" id="paleo" class="diet diet3"> Paleo</li>
      <li><input type="checkbox" id="ketogenic" class="diet diet4"> Ketogenic</li>
    </ul>
    <h5>Time</h5>
    <ul>
      <li><input type="checkbox" id="15" class="time time0"> 0-15 Minutes</li>
      <li><input type="checkbox" id="30" class="time time1"> 0-30 Minutes</li>
      <li><input type="checkbox" id="45" class="time time2"> 0-45 Minutes</li>
      <li><input type="checkbox" id="60" class="time time3"> 0-1 hr</li>
    </ul>
    <h5>Type of Meal</h5>
    <ul>
      <li><input type="checkbox" id="breakfast" class="typeOfMeal typeOfMeal0"> Breakfast</li>
      <li><input type="checkbox" id="main%20course" class="typeOfMeal typeOfMeal1"> Main Course</li>
      <li><input type="checkbox" id="dessert" class="typeOfMeal typeOfMeal2"> Dessert</li>
      <li><input type="checkbox" id="drink" class="typeOfMeal typeOfMeal3"> Drink</li>
    </ul>
    <button class="apply-filter">Apply filter</button>
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
        const sidebarContent = this.shadow.querySelector('.sidebar-content');
        const inputList = {};
        inputList.query = searchTerm;
        inputList.number = 10;
        inputList.offset = 0;
        inputList.recipeNutrition = 'true';
        const checkboxesCuisine = sidebarContent.querySelectorAll('.cuisine');
        const checkboxesDiet = sidebarContent.querySelectorAll('.diet');
        const checkboxesTime = sidebarContent.querySelectorAll('.time');
        const checkboxesType = sidebarContent.querySelectorAll('.typeOfMeal');
        let cuisineFilter = '';
        let dietFilter = '';
        let timeFilter = '';
        let typeFilter = '';
        const cuisineFilterCheckbox = [];
        const dietFilterCheckbox = [];
        const timeFilterCheckbox = [];
        const typeFilterCheckbox = [];
        for (let i = 0; i < checkboxesCuisine.length; i += 1) {
          const item = checkboxesCuisine[i];
          if (item.checked) {
            cuisineFilter = `${cuisineFilter + item.id},`;
            cuisineFilterCheckbox[i] = 1;
          } else {
            cuisineFilterCheckbox[i] = 0;
          }
        }
        for (let i = 0; i < checkboxesDiet.length; i += 1) {
          const item = checkboxesDiet[i];
          if (item.checked) {
            dietFilter = `${dietFilter + item.id},`;
            dietFilterCheckbox[i] = 1;
          } else {
            dietFilterCheckbox[i] = 0;
          }
        }
        for (let i = 0; i < checkboxesTime.length; i += 1) {
          const item = checkboxesTime[i];
          if (item.checked) {
            timeFilter = Math.max(timeFilter, item.id);
            timeFilterCheckbox[i] = 1;
          } else {
            timeFilterCheckbox[i] = 0;
          }
        }
        for (let i = 0; i < checkboxesType.length; i += 1) {
          const item = checkboxesType[i];
          if (item.checked) {
            typeFilter = `${typeFilter + item.id},`;
            typeFilterCheckbox[i] = 1;
          } else {
            typeFilterCheckbox[i] = 0;
          }
        }
        if (cuisineFilter.length !== 0) cuisineFilter = cuisineFilter.substring(0, cuisineFilter.length - 1);
        if (dietFilter.length !== 0) dietFilter = dietFilter.substring(0, dietFilter.length - 1);
        if (typeFilter.length !== 0) typeFilter = typeFilter.substring(0, typeFilter.length - 1);
        inputList.cuisineFilter = cuisineFilter;
        inputList.dietFilter = dietFilter;
        inputList.timeFilter = timeFilter;
        inputList.typeFilter = typeFilter;
        inputList.cuisineFilterCheckbox = cuisineFilterCheckbox;
        inputList.dietFilterCheckbox = dietFilterCheckbox;
        inputList.timeFilterCheckbox = timeFilterCheckbox;
        inputList.typeFilterCheckbox = typeFilterCheckbox;
        window.localStorage.setItem('QueryList', JSON.stringify(inputList));
        window.location.href = `search.html${this.generateQueryString(searchTerm)}`;
      }
    });

    // Detect if the device is mobile or PC
    const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;

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
