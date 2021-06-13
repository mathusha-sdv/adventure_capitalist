export const actionsType = {
  GET_PRODUCT: 'GET_PRODUCT',
  GET_MANAGER: 'GET_MANAGER'
};

export const getProducts = () => ({
  type: actionsType.GET_PRODUCT
});

export const getManager = () => ({
  type: actionsType.GET_MANAGER
});
