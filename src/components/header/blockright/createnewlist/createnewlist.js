/* eslint-disable import/extensions */
import { CreateModalInput } from '../../../modal/modal.js';
import { CreateMain } from '../../../main/main.js';
import { getState } from '../../../state/state.js';

export const CreateNewList = () => {
  const button = document.createElement('button');
  button.classList.add('flexboxtype');
  button.classList.add('createnewlist');

  const img = document.createElement('img');
  img.classList.add('add-list');
  const imgSrc = './src/images/add.png';
  img.src = imgSrc;
  img.alt = imgSrc;

  const span = document.createElement('span');
  span.classList.add('labelcreatenew');
  span.innerHTML = 'Create new list';

  button.addEventListener('click', () => {
    CreateModalInput((value) => {
      if (!value) return;
      const state = getState();
      const lengthObj = Object.keys(state).length;
      state[lengthObj] = {};
      for (let i = lengthObj; i > 0; i -= 1) {
        state[i] = state[i - 1];
      }
      state[0] = { title: value, items: [] };
      CreateMain(state);
    });
  });
  
  button.appendChild(img);
  button.appendChild(span);
  return button;
};
