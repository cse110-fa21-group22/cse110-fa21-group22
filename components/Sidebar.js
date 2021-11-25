//A skeleton for the sidebar component
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/sidebar.css';

const sidebarTemplate = document.createElement('template');
sidebarTemplate.innerHTML = `
	<nav class="sidebar">
        <button>Temporary Button</button>
	</nav>`;

class Sidebar extends HTMLElement {
  /**
   * Contructor for the Sidebar class
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.appendChild(link);
    this.shadow.appendChild(sidebarTemplate.content);

    //TODO
    //Need some important functions and checkmarks for the filter functions
  }
}

customElements.define('sidebar-component', Sidebar);
