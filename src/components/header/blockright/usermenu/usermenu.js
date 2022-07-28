export const UserMenu = () => {
  const userMenu = document.createElement('div');
  userMenu.classList.add('flexboxtype');
  userMenu.classList.add('user-menu');

  const userAvatarContainer = document.createElement('div');
  userAvatarContainer.classList.add('user-avatar-container');

  const userAvatarImg = document.createElement('img');
  userAvatarImg.classList.add('user-avatar');
  let imgSrc = 'https://www.spletnik.ru/img/__post/49/49f4f42c0993272be87db2eb48f4cabb_275.jpg';
  userAvatarImg.src = imgSrc;
  userAvatarImg.alt = 'Not pictire';

  userAvatarContainer.appendChild(userAvatarImg);

  const arrowDownContainer = document.createElement('div');
  arrowDownContainer.classList.add('arrow-down-container');

  const arrowDownImg = document.createElement('img');
  imgSrc = './src/images/arrow-down.png';
  arrowDownImg.src = imgSrc;
  arrowDownImg.alt = imgSrc;
  arrowDownImg.id = 'arrow-down';

  arrowDownContainer.appendChild(arrowDownImg);

  const menu = document.createElement('div');
  menu.classList.add('flexboxtype');
  menu.classList.add('menu');
  menu.id = 'menu';

  const menuF = () => {
    let menustate = 0;

    const change = () => {
      if (menustate === 0) {
        menustate = 1;
        const elemArrowDown = document.getElementById('arrow-down');
        elemArrowDown.className = '';
        elemArrowDown.classList.add('arrow-down-reverse');

        let str = '<div class="menu-item">My account</div>';
        str += '<div class="menu-item">My tasks</div>';
        str += '<div class="menu-item">Log out</div>';
        document.getElementById('menu').innerHTML = str;
      } else {
        menustate = 0;
        const elemArrowDown = document.getElementById('arrow-down');
        elemArrowDown.className = '';
        elemArrowDown.classList.add('arrow-down');

        const destroyMenu = () => {
          document.getElementById('menu').innerHTML = '';
        };

        setTimeout(destroyMenu, 300);
      }
    };

    return { change };
  };
  const menuT = menuF();

  arrowDownImg.onclick = menuT.change;

  userMenu.appendChild(userAvatarContainer);
  userMenu.appendChild(arrowDownContainer);
  userMenu.appendChild(menu);

  return userMenu;
};
