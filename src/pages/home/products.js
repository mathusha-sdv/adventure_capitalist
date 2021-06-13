import React from 'react';
import { connect } from 'react-redux';
import { setSolde, setSoldeMinus } from '../../actions/solde';
import store from '../../store';

const Product = ({ item, money }) => {
  const {
    name, image, price, upgradePrice, upgradeLvl
  } = item;
  const { dispatch } = store;

  const buyProduct = () => {
    dispatch(setSolde(price));
  };

  const upgradeProduct = () => {
    dispatch(setSoldeMinus(upgradePrice));
  };

  const majProduct = money / upgradePrice;
  const myStyle = {
    width: majProduct
  };

  return (
    <div className="card m-5">
      <img className="card-img-top" src={`${image}`} alt={`${name}`} />
      <div className="progress">
        <div className="progress-bar" style={myStyle} role="progressbar" aria-valuemin="0" aria-label="progress-bar" aria-valuemax="100" />
      </div>
      <div className="card-body" onClick={buyProduct} role="presentation">
        <h5 className="card-title">{`${name}`}</h5>
        <p className="card-text">{`${price} €`}</p>
      </div>
      <div className="card-body bg-warning" onClick={upgradeProduct} role="presentation">
        <h5 className="card-title">Upgrade</h5>
        <p className="card-text">{`Level : ${upgradeLvl}`}</p>
        <p className="card-text">{`${upgradePrice} €`}</p>
      </div>
    </div>
  );
};

const Products = ({ products, money }) => (
  <div className="mt-5">
    <div className="row">
      <div className="col-12">
        <ul className="list-group d-flex flex-row">
          {products
            .filter((object) => object.isUnlocked === true)
            .map((item) => <Product key={item.name} item={item} money={money} />)}
        </ul>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products,
  money: state.solde.money
});

export default connect(mapStateToProps)(Products);
