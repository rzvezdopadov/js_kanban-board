/* eslint-disable import/extensions */
import { CreateHeader } from './components/header/header.js';
import { CreateFooter } from './components/footer/footer.js';
import { CreateMain } from './components/main/main.js';
import { getState } from './components/state/state.js';

window.onload = () => {
  const body = document.getElementById('body');
  body.appendChild(CreateHeader());
  body.appendChild(CreateMain(getState()));
  body.appendChild(CreateFooter());
};
