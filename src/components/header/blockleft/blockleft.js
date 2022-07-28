export const CreateBlockLeft = () => {
  const div = document.createElement('div');
  div.classList.add('flexboxtype');
  div.classList.add('blockleft');

  const img = document.createElement('img');
  img.classList.add('logo');
  const imgSrc = './src/images/logo.png';
  img.src = imgSrc;
  img.alt = imgSrc;

  const a = document.createElement('a');
  a.classList.add('brand');
  a.href = '#';
  a.innerHTML = 'Awesome Kanban Board';

  div.appendChild(img);
  div.appendChild(a);
  return div;
};
