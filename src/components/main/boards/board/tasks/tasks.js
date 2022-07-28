export const CreateBoardTasks = (key, state) => {
  const elemTaskContainer = document.createElement('div');
  elemTaskContainer.classList.add('flexboxtype');
  elemTaskContainer.classList.add('task-container');
  elemTaskContainer.id = `taskContainer${key}`;

  for (let i = 0; i < state[key].items.length; i += 1) {
    const elemTask = document.createElement('div');
    elemTask.classList.add('flexboxtype');
    elemTask.classList.add('task');
    elemTask.innerHTML = state[key].items[i];
    elemTaskContainer.appendChild(elemTask);
  }

  return elemTaskContainer;
};
