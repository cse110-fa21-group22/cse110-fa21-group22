// A skeleton for the sidebar component
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/sidebar.css';

const sidebarTemplate = document.createElement('template');
sidebarTemplate.innerHTML = `
	<nav class="sidebar-content">
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

    // TODO
    // Initialize the sidebar with checkmarks
    initializeSidebar() {
    }

    isShow = false;
    let sidebarButton = this.shadow.querySelector(".sidebar");
    sidebarButton.addEventListener('click', () => {
      console.log(isShow);
      let sidebarContent = this.shadow.querySelector(".siderbar-content");
      if(!isShow) {
        sidebarContent.style.display = "block";
        isShow = true;
      } else {
        sidebarContent.style.display = "none";
        isShow = false;
      }
    });
  }
}

customElements.define('sidebar-component', Sidebar);
