/* eslint-disable import/extensions */
import { getState } from '../../state/state.js';

export const UpdateFinishedTask = () => {
  const state = getState();

  let count = 0;

  const objCount = Object.keys(state).length;
  if (objCount !== 0) {
    count = state[Object.keys(state).length - 1].items.length;
  }

  const numberSpan = document.getElementById('finished-tasks');
  if (numberSpan) numberSpan.innerHTML = count;

  return count;
};

export const CreateFinishedTask = () => {
  const div = document.createElement('div');

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('tasks-count-label');
  labelSpan.innerHTML = 'Finished tasks: ';

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('finished-tasks');
  numberSpan.id = 'finished-tasks';
  numberSpan.innerHTML = UpdateFinishedTask();

  div.appendChild(labelSpan);
  div.appendChild(numberSpan);

  return div;
};
