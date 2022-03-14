import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h2>TrybeWallet</h2>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="total-field">
            {/* aqui entra a despesa total de vdd na frente. */}
            0
          </p>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor
            <input
              type="number"
              id="input-value"
              name="value"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="input-desc">
            Descrição
            <input
              type="text"
              id="input-desc"
              name="desc"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="select-currency">
            Moeda
            <select data-testid="currency-input" name="currency" id="select-currency">
              <option value="valor-temporario">opção temporária</option>
            </select>
          </label>
          <label htmlFor="select-currency">
            Método de pagamento
            <select
              data-testid="method-input"
              name="payment-method"
              id="select-payment-method"
            >
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="select-currency">
            Categoria
            <select
              data-testid="tag-input"
              name="tag"
              id="select-tag"
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transportação</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
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
