import styles from '../styles/list.scss';

const template = document.createElement('template');
template.innerHTML = `
<style>${styles.toString()}</style>
<ul>
    <slot>
      <p>You have nothing to do, yay!</p>
    </slot>
</ul>
<input id="new-item"/>
<button>Add</button>
`;

class TodoList extends HTMLElement {
    constructor() {
        super();

        const shadowDOM = this.attachShadow({mode: 'open'});

        shadowDOM.appendChild(template.content.cloneNode(true));

        this.addItem = this.addItem.bind(this);
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector('button');
        button.onclick = this.addItem;
    }

    addItem() {
        const input = this.shadowRoot.querySelector('#new-item');

        const item = document.createElement('list-item');
        item.innerHTML = input.value;

        this.appendChild(item);
    }
}

export default TodoList;
