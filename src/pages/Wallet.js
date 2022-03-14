import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">
          {/* aqui entra a despesa total de vdd na frente. */}
          0
        </p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: 'No email given!',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
