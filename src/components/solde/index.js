import React from 'react';
import { connect } from 'react-redux';

const Solde = ({ money }) => (
  <div className="container">
    <span className="h5">
      Mon solde :
      { money }
    </span>
  </div>
);
// export default Solde;
const mapToProps = (state) => ({
  money: state.solde.money
});

export default connect(mapToProps)(Solde);
