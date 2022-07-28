/* eslint-disable import/extensions */
import { CreateNewList } from './createnewlist/createnewlist.js';
import { UserMenu } from './usermenu/usermenu.js';

export const CreateBlockRight = () => {
  const rightBlock = document.createElement('div');
  rightBlock.classList.add('flexboxtype');
  rightBlock.classList.add('blockright');

  rightBlock.appendChild(CreateNewList());
  rightBlock.appendChild(UserMenu());

  return rightBlock;
};
