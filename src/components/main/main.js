/* eslint-disable import/extensions */
import { UpdateActiveTask } from '../footer/active-tasks/active-tasks.js';
import { UpdateFinishedTask } from '../footer/finished-tasks/finished-tasks.js';
import { setState } from '../state/state.js';
import { CreateBoards } from './boards/boards.js';

export const CreateMain = (state) => {
  setState(state);
  const main = document.createElement('main');
  main.classList.add('main');
  main.id = 'main';
  const boards = CreateBoards(CreateMain);

  UpdateActiveTask();
  UpdateFinishedTask();

  if (document.getElementById('main') !== null) {
    document.getElementById('main').removeChild(document.getElementById('main-div'));
    document.getElementById('main').appendChild(boards);
    return boards;
  }

  main.appendChild(boards);

  return main;
};
