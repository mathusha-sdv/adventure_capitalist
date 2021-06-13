import { actionTypes } from '../actions/solde';

const initialState = {
  money: 100000000000
};

const setSolde = (state, action) => ({
  money: state.money + parseInt(action.money, 10)
});

const setSoldeMinus = (state, action) => ({
  money: state.money - parseInt(action.money, 10)
});

const solde = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SOLDE:
      return setSolde(state, action);
    case actionTypes.SET_SOLDE_MINUS:
      return setSoldeMinus(state, action);
    default:
      return state;
  }
};

export default solde;
