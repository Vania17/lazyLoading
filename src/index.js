import {registerImage, removeState} from './lazy';

const max = 123;
const min = 1;
const random = ()=> Math.floor(Math.random()*(max-min))+min;

const createImageNode=()=>{
    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto rounded-md bg-gray-300';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    return container;
}

const mountNode = document.querySelector('#images');

const addButton = document.querySelector('.button');
addButton.className = 'button-style';

const removeButton = document.querySelector('.remove');
removeButton.className = 'button-remove';

const addImage = ()=>{
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}

const removeImage=()=>{
    [...mountNode.childNodes].forEach(item=>{
        item.remove()
    })

    removeState();
}

addButton.addEventListener("click",addImage);
removeButton.addEventListener("click", removeImage);