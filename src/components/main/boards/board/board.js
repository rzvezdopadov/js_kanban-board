/* eslint-disable import/extensions */
import { CreateBoardFooter } from './footer/footer.js';
import { CreateBoardHeader } from './header/header.js';
import { CreateBoardTasks } from './tasks/tasks.js';

export const CreateBoard = (key, state, CreateMain) => {
  const elemTaskBoard = document.createElement('div');
  elemTaskBoard.classList.add('flexboxtype');
  elemTaskBoard.classList.add('task-board');

  elemTaskBoard.appendChild(CreateBoardHeader(key, state, CreateMain));
  elemTaskBoard.appendChild(CreateBoardTasks(key, state));
  elemTaskBoard.appendChild(CreateBoardFooter(key, state, CreateMain));

  return elemTaskBoard;
};
