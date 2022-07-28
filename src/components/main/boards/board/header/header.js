/* eslint-disable import/extensions */
import { CreateModalDelete } from '../../../../modal/modal.js';

export const CreateBoardHeader = (key, state, CreateMain) => {
  const elemHeader = document.createElement('div');
  elemHeader.classList.add('flexboxtype');
  elemHeader.classList.add('task-board-header');

  const elemSpan = document.createElement('span');
  elemSpan.classList.add('flexboxtype');
  elemSpan.classList.add('task-board-header-span');
  elemSpan.innerHTML = state[key].title;
  elemHeader.appendChild(elemSpan);

  const elemButton = document.createElement('button');
  elemButton.classList.add('flexboxtype');
  elemButton.classList.add('task-board-dots');
  elemButton.innerHTML = '•••';
  elemButton.addEventListener('click', () => {
    CreateModalDelete(() => {
      const ourState = state;
      ourState[key] = {};

      const maxElem = Object.keys(state).length;

      for (let i = Number(key); i < maxElem - Number(key); i += 1) {
        ourState[i] = state[i + 1];
      }
      delete ourState[maxElem - 1];

      CreateMain(ourState);
    }, 'task-board', Number(key));
  });

  elemHeader.appendChild(elemButton);
  return elemHeader;
};
