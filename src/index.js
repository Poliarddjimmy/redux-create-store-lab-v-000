// write your createStore function here
function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function createStore(candyReducer) {
  let state;

  function dispatch(action) {
    state = candyReducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(candyReducer) // createStore takes the reducer reducer as an argument
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});