/* eslint-disable import/extensions */
export const CreateBoardFooter = (key, state, CreateMain) => {
  const elemAddCard = document.createElement('div');
  elemAddCard.classList.add('flexboxtype');
  elemAddCard.classList.add('add-card');

  const elemAddCardBtn = document.createElement('button');
  elemAddCardBtn.classList.add('add-card-btn');
  elemAddCardBtn.innerHTML = 'Add card';
  if (key !== '0' && (state[key - 1].items.length === 0)) elemAddCardBtn.setAttribute('disabled', 'disabled');

  elemAddCardBtn.addEventListener('click', () => {
    let elemTask;
    const strKeyTask = `task${key}`;

    if (key === '0') {
      elemTask = document.createElement('div');
      elemTask.classList.add('flexboxtype');
      elemTask.classList.add('task');
      elemTask.contentEditable = true;
      elemTask.id = strKeyTask;
      elemTask.focus();

      elemTask.addEventListener('blur', () => {
        const elemTaskDo = document.getElementById(strKeyTask);
        const keyTaskValue = elemTaskDo.innerHTML;
        let keyTaskRepeat = -1;

        state[key].items.forEach((val, index) => {
          if (val === keyTaskValue) {
            keyTaskRepeat = index;
          }
          return true;
        });

        if (keyTaskValue && keyTaskRepeat === -1) {
          state[key].items.push(elemTaskDo.innerHTML);
        } else if (keyTaskRepeat !== -1) alert('Нельзя создать заметку с одинаковым содержимым!');

        CreateMain(state);
      });

      elemTask.addEventListener('keypress', (event) => {
        const code = event.keyCode;

        if (!((code > 47 && code < 58)
            || (code > 96 && code < 123)
              || (code > 64 && code < 91)
                || (code === 95))) {
          event.preventDefault();
        }
      });
    } else {
      elemTask = document.createElement('select');
      elemTask.classList.add('flexboxtype');
      elemTask.classList.add('task');
      elemTask.id = strKeyTask;

      let elemOption = document.createElement('option');
      elemOption.disabled = true;
      elemOption.defaultSelected = true;
      elemTask.appendChild(elemOption);

      for (let i = 0; i < state[key - 1].items.length; i += 1) {
        elemOption = document.createElement('option');
        elemOption.innerHTML = state[key - 1].items[i];
        elemTask.appendChild(elemOption);
      }

      elemTask.addEventListener('change', () => {
        const elemTaskDo = document.getElementById(strKeyTask);
        if (elemTaskDo.value) {
          const value = elemTaskDo.value;
          state[key - 1].items.splice(state[key - 1].items.indexOf(elemTaskDo.value), 1);
          state[key].items.push(value);
        }

        CreateMain(state);
      });

      elemTask.addEventListener('blur', () => {
        elemTask.remove();  
      });
    }

    if (!document.getElementById(strKeyTask)) {
      document.getElementById(`taskContainer${key}`).appendChild(elemTask);
      document.getElementById(elemTask.id).focus();
    }
  });

  elemAddCard.appendChild(elemAddCardBtn);

  return elemAddCard;
};
