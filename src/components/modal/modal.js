export const CreateModalInput = (callback) => {
  const elemModal = document.createElement('div');
  elemModal.classList.add('flexboxtype');
  elemModal.classList.add('module-modal');
  elemModal.id = 'module-modal';

  const destroyModal = () => {
    const value = document.getElementById('module-modal-input').value;

    if (value && callback) callback(value);

    document.getElementById('module-modal').remove();
  };

  elemModal.addEventListener('click', () => {
    if (event.target !== event.currentTarget) return;

    destroyModal();
  });

  elemModal.addEventListener('keypress', (keyPress) => {
    if (keyPress.key === 'Enter') {
      destroyModal();
    }
  });

  const elemModalContent = document.createElement('div');
  elemModalContent.classList.add('flexboxtype');
  elemModalContent.classList.add('module-modal-content');
  elemModalContent.addEventListener('click', () => {});

  const elemModalClose = document.createElement('div');
  elemModalClose.classList.add('flexboxtype');
  elemModalClose.classList.add('module-modal-close');

  const elemModalCloseSpan = document.createElement('span');
  elemModalCloseSpan.innerHTML = '×';

  elemModalClose.appendChild(elemModalCloseSpan);
  elemModalClose.addEventListener('click', () => document.getElementById('module-modal').remove());

  const elemModalText = document.createElement('span');
  elemModalText.classList.add('flexboxtype');
  elemModalText.classList.add('module-modal-text');
  elemModalText.innerHTML = 'Enter title';

  const elemModalInput = document.createElement('input');
  elemModalInput.classList.add('module-modal-input');
  elemModalInput.id = 'module-modal-input';

  elemModalContent.appendChild(elemModalClose);
  elemModalContent.appendChild(elemModalText);
  elemModalContent.appendChild(elemModalInput);

  elemModal.appendChild(elemModalContent);

  document.getElementById('body').appendChild(elemModal);
  document.getElementById(elemModalInput.id).focus();
};

export const CreateModalDelete = (callback, className, position) => {
  const elemModal = document.createElement('div');
  elemModal.classList.add('flexboxtype');
  elemModal.classList.add('module-modal-delete-back');
  elemModal.id = 'module-modal-delete-back';
  elemModal.addEventListener('click', () => {
    document.getElementById('module-modal-delete-back').remove();
    document.getElementById('module-modal-delete').remove();
  });
  document.getElementById('body').appendChild(elemModal);

  const elemModalDelete = document.createElement('div');
  elemModalDelete.classList.add('module-modal-delete');
  elemModalDelete.id = 'module-modal-delete';

  const elemModalDeleteContent = document.createElement('div');
  elemModalDeleteContent.classList.add('module-modal-delete-content');

  const elemModalDeleteTitle = document.createElement('span');
  elemModalDeleteTitle.classList.add('module-modal-delete-title');
  elemModalDeleteTitle.innerHTML = 'Delete board';
  elemModalDelete.addEventListener('click', () => {
    document.getElementById('module-modal-delete-back').remove();
    document.getElementById('module-modal-delete').remove();
    if (callback) callback();
  });

  elemModalDeleteContent.appendChild(elemModalDeleteTitle);
  elemModalDelete.appendChild(elemModalDeleteContent);
  const elemParent = document.getElementsByClassName(className)[position];
  elemParent.appendChild(elemModalDelete);
};
