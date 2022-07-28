/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
let state = {
  0: { title: 'Backlog', items: [] },
  1: { title: 'Ready', items: [] },
  2: { title: 'In progress', items: [] },
  3: { title: 'Finished', items: [] },
};

const setState = () => {
  localStorage.setItem('state', JSON.stringify(state));
};

const getState = () => {
  const stateTemp = JSON.parse(localStorage.getItem('state'));

  if (stateTemp === null) {
    setState();
    return;
  }

  state = stateTemp;
};

const refreshTasksBoard = () => {
  const elemMain = document.getElementById('main');
  elemMain.innerHTML = '';

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      const elemTaskBoard = document.createElement('div');
      elemTaskBoard.classList.add('flexboxtype');
      elemTaskBoard.classList.add('task-board');

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
      elemHeader.appendChild(elemButton);

      elemTaskBoard.appendChild(elemHeader);

      const elemTaskContainer = document.createElement('div');
      elemTaskContainer.classList.add('flexboxtype');
      elemTaskContainer.classList.add('task-container');
      const strKey = `taskContainer${key}`;
      elemTaskContainer.id = strKey;

      for (let i = 0; i < state[key].items.length; i += 1) {
        const elemTask = document.createElement('div');
        elemTask.classList.add('flexboxtype');
        elemTask.classList.add('task');
        elemTask.innerHTML = state[key].items[i];
        elemTaskContainer.appendChild(elemTask);
      }

      elemTaskBoard.appendChild(elemTaskContainer);

      const elemAddCard = document.createElement('div');
      elemAddCard.classList.add('flexboxtype');
      elemAddCard.classList.add('add-card');

      const elemAddCardBtn = document.createElement('button');
      elemAddCardBtn.classList.add('add-card-btn');
      elemAddCardBtn.innerHTML = 'Add card';
      if (key !== '0' && (state[key - 1].items.length === 0)) elemAddCardBtn.setAttribute('disabled', 'disabled');

      // eslint-disable-next-line no-loop-func
      const f = () => {
        let elemTask;
        const strKeyTask = `task${key}`;

        if (key === '0') {
          elemTask = document.createElement('div');
          elemTask.classList.add('flexboxtype');
          elemTask.classList.add('task');
          elemTask.contentEditable = true;
          elemTask.id = strKeyTask;

          elemTask.addEventListener('blur', () => {
            const elemTaskDo = document.getElementById(strKeyTask);
            if (elemTaskDo.innerHTML) {
              state[key].items.push(elemTaskDo.innerHTML);
            }
            setState();
            refreshTasksBoard();
          });
        } else {
          elemTask = document.createElement('select');
          elemTask.classList.add('flexboxtype');
          elemTask.classList.add('task');
          elemTask.id = strKeyTask;
          for (let i = 0; i < state[key - 1].items.length; i += 1) {
            const elemOption = document.createElement('option');
            elemOption.innerHTML = state[key - 1].items[i];
            elemTask.appendChild(elemOption);
          }

          const fOpt = () => {
            const elemTaskDo = document.getElementById(strKeyTask);
            if (elemTaskDo.value) {
              state[key].items.push(elemTaskDo.value);
              state[key - 1].items.splice(state[key - 1].items.indexOf(elemTaskDo.value), 1);
            }
            setState();
            refreshTasksBoard();
          };

          elemTask.addEventListener('change', fOpt);
          elemTask.addEventListener('blur', fOpt);
        }

        if (!document.getElementById(strKeyTask)) {
          document.getElementById(strKey).appendChild(elemTask);
        }
      };

      elemAddCardBtn.addEventListener('click', f);

      elemTaskBoard.appendChild(elemAddCard);

      elemAddCard.appendChild(elemAddCardBtn);

      elemMain.appendChild(elemTaskBoard);
    }
  }
};

const menu = () => {
  let menustate = 0;

  const change = () => {
    if (menustate === 0) {
      menustate = 1;
      document.getElementById('arrow-down').className = '';
      document.getElementById('arrow-down').classList.add('arrow-down-reverse');

      let str = '<div class="menu-item">My account</div>';
      str += '<div class="menu-item">My tasks</div>';
      str += '<div class="menu-item">Log out</div>';
      document.getElementById('menu').innerHTML = str;
    } else {
      menustate = 0;
      document.getElementById('arrow-down').className = '';
      document.getElementById('arrow-down').classList.add('arrow-down');

      const destroyMenu = () => {
        document.getElementById('menu').innerHTML = '';
      };

      setTimeout(destroyMenu, 300);
    }
  };

  return { change };
};

const mainMenu = menu();

window.onload = () => {
  document.getElementById('arrow-down').onclick = mainMenu.change;
  getState();
  refreshTasksBoard();
};
