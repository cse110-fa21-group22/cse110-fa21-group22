const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/imageCard.css';

const equipmentCardTemplate = document.createElement('template');
equipmentCardTemplate.innerHTML = `
    <article class="equipment-card">
        <img class="equipment-image" src="http://placekitten.com/200/300" alt="equipment-image"/>
        <p class="equipment-name">Baking Mixer</p>
    </article>
`;

class EquipmentCard extends HTMLElement {
	set equipment(equipmentObj) {
		this.setAttribute('equipment-id', equipmentObj['id']);
		const size = '100x100';
		const equipmentImg = this.shadow.querySelector('.equipment-image');
		const equipmentName = this.shadow.querySelector('.equipment-name');

		equipmentImg.src =
			'https://spoonacular.com/cdn/equipment_' +
			size +
			'/' +
			equipmentObj['image'];
		equipmentName.innerHTML = equipmentObj['name'];
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(equipmentCardTemplate.content.cloneNode(true));
		this.shadow.appendChild(link.cloneNode(true));
	}

	connectedCallback() {}
}

customElements.define('equipment-card-component', EquipmentCard);
