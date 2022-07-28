export const CreateBlockRightFoot = () => {
  const div = document.createElement('div');
  div.classList.add('flexboxtype');
  div.classList.add('blockrightfoot');
  div.innerHTML = 'Kanban board by Roman Zvezdopadov, 2021';

  return div;
};
