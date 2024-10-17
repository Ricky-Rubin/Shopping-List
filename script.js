const item = document.querySelector('#entry');
const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

function addItem () {
    const list = document.createElement('li');
    const delButton = document.createElement('button');

    list.textContent = item.value;
    delButton.textContent = 'Delete';
    delButton.style.cssText = 'margin-left: 25px; border: 1px solid grey; border-radius: 8px; text-align: center; font-size: 11px;';
    delButton.onclick = () => {
        container.removeChild(eachItem);
    }

    item.value = '';

    const eachItem = document.createElement('div');
    eachItem.style.cssText = 'display: flex; margin: 8px 0px';
    eachItem.appendChild(list);
    eachItem.appendChild(delButton);

    container.appendChild(eachItem);
};

btn.addEventListener('click', addItem);

item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
})