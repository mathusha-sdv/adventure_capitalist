export const actionTypes = {
  SET_SOLDE: 'SET_SOLDE',
  SET_SOLDE_MINUS: 'SET_SOLDE_MINUS'

};

export const setSolde = (money) => ({
  type: actionTypes.SET_SOLDE,
  money
});
export const setSoldeMinus = (money) => ({
  type: actionTypes.SET_SOLDE_MINUS,
  money
});
