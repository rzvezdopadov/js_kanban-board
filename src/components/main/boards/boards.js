/* eslint-disable import/extensions */
import { getState } from '../../state/state.js';
import { CreateBoard } from './board/board.js';

export const CreateBoards = (CreateMain) => {
  const div = document.createElement('div');
  div.classList.add('main-div-container');
  div.id = 'main-div';

  const state = getState();

  Object.keys(state).forEach((key) => {
    div.appendChild(CreateBoard(key, state, CreateMain));
  });

  if (!div.innerHTML) {
    const elemSpan = document.createElement('span');
    elemSpan.innerHTML = 'Boards not created yet, please create new list!';
    elemSpan.style.color = 'white';
    div.appendChild(elemSpan);
  }

  return div;
};
