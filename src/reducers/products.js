import { actionsType } from '../actions/actions_index';

const initalState = [{
  name: 'Carrot',
  price: '5',
  isUnlocked: true,
  unlockPrice: '100',
  upgradePrice: '10',
  image: 'https://png.pngtree.com/element_pic/16/05/31/00574c6e02d716a.jpg',
  managed: false,
  managerPrice: 100,
  upgradeLvl: 1
},
{
  name: 'Car',
  price: '5000',
  isUnlocked: false,
  unlockPrice: '10000',
  upgradePrice: '7000',
  image: 'https://i.pinimg.com/736x/66/3f/ac/663facc597e38c0e3fd8ef6cb76467ec.jpg',
  managed: false,
  managerPrice: 10000,
  upgradeLvl: 1

}, {
  name: 'Plane',
  price: '50000',
  isUnlocked: false,
  unlockPrice: '140000',
  upgradePrice: '70000',
  image: 'https://toppng.com/uploads/preview/air-france-plane-11549405064cxjcr4bebh.png',
  managed: false,
  managerPrice: 100000,
  upgradeLvl: 1
}];

const getProducts = (state) => {
  const stateUpdated = [...state];
  let i = 0;
  let check = false;
  for (i = 0; i < stateUpdated.length; i += 1) {
    if (!stateUpdated[i].isUnlocked && check === false) {
      stateUpdated[i].isUnlocked = true;
      check = true;
    }
  }

  return stateUpdated;
};

const products = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.GET_PRODUCT:
      return getProducts(state);
    default:
      return state;
  }
};

export default products;
