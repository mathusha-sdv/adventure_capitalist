import React from 'react';
import { connect } from 'react-redux';
import { setSoldeMinus } from '../../actions/solde';
import store from '../../store';
import { getProducts } from '../../actions/actions_index';

const UnlockProduct = ({ products }) => {
  const getNextProduct = () => {
    let nextProduct;
    let check = false;
    for (let i = 0; i < products.length; i += 1) {
      if (!products[i].isUnlocked && check === false) {
        nextProduct = products[i];
        check = true;
      }
    }
    if (nextProduct != null) {
      return nextProduct.unlockPrice;
    }

    return null;
  };

  const handleClick = () => {
    const { dispatch } = store;
    dispatch(setSoldeMinus(getNextProduct()));
    dispatch(getProducts());
  };

  return (
    <div className="card m-5" onClick={handleClick} role="presentation">
      <img className="card-img-top" src="https://img.freepik.com/free-vector/locker_53876-25496.jpg?size=626&ext=jpg&ga=GA1.2.967991179.1622246400" alt="unlock" />
      <div className="card-body">
        <h5 className="card-title">Débloquer produit</h5>
        <h1>
          {`${getNextProduct()} euros`}
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  money: state.solde.money
});

export default connect(mapStateToProps)(UnlockProduct);
