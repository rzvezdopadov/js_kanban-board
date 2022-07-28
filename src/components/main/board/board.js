export const UpdateAllBoard = () => {
  const div = document.createElement('div');

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('tasks-count-label');
  labelSpan.innerHTML = 'Finished tasks: ';

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('finished-tasks');
  numberSpan.id = 'finished-tasks';
  numberSpan.innerHTML = '0';

  div.appendChild(labelSpan);
  div.appendChild(numberSpan);

  return div;
};
