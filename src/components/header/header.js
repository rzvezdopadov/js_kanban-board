/* eslint-disable import/extensions */
import { CreateBlockLeft } from './blockleft/blockleft.js';
import { CreateBlockRight } from './blockright/blockright.js';

export function CreateHeader() {
  const header = document.createElement('header');
  header.classList.add('flexboxtype');
  header.classList.add('header');

  header.appendChild(CreateBlockLeft());
  header.appendChild(CreateBlockRight());

  return header;
}
