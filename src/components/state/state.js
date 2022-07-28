export const setState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

export const getState = () => {
  let state = JSON.parse(localStorage.getItem('state'));

  if (state === null) {
    state = {
      0: { title: 'Backlog', items: [] },
      1: { title: 'Ready', items: [] },
      2: { title: 'In progress', items: [] },
      3: { title: 'Finished', items: [] },
    };
    setState(state);
  }

  return state;
};
