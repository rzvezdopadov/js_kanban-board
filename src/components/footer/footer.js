/* eslint-disable import/extensions */
import { CreateActiveTask } from './active-tasks/active-tasks.js';
import { CreateFinishedTask } from './finished-tasks/finished-tasks.js';
import { CreateBlockRightFoot } from './blockrightfoot/blockrightfoot.js';

export function CreateFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('flexboxtype');
  footer.classList.add('footer');

  footer.appendChild(CreateActiveTask());
  footer.appendChild(CreateFinishedTask());
  footer.appendChild(CreateBlockRightFoot());

  return footer;
}
