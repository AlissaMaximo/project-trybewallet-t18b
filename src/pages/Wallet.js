import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';

class Wallet extends React.Component {
  state = {
    value: 0,
    desc: '',
    currency: 'valor-temporario',
    'payment-method': 'cash',
    tag: 'food',
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleButtonAddExpense = () => {
    const { addMyExpense } = this.props;
    addMyExpense(this.state);
  }

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
              data-testid="value-input"
              id="input-value"
              name="value"
              type="number"
              onChange={ this.handleFormChange }
            />
          </label>
          <label htmlFor="input-desc">
            Descrição
            <input
              data-testid="description-input"
              id="input-desc"
              name="desc"
              type="text"
              onChange={ this.handleFormChange }
            />
          </label>
          <label htmlFor="select-currency">
            Moeda
            <select
              data-testid="currency-input"
              id="select-currency"
              name="currency"
              onChange={ this.handleFormChange }
            >
              <option value="valor-temporario">opção temporária</option>
            </select>
          </label>
          <label htmlFor="select-currency">
            Método de pagamento
            <select
              data-testid="method-input"
              id="select-payment-method"
              name="payment-method"
              onChange={ this.handleFormChange }
            >
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="select-currency">
            Categoria
            <select
              data-testid="tag-input"
              id="select-tag"
              name="tag"
              onChange={ this.handleFormChange }
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transportação</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleButtonAddExpense }>
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  addMyExpense: PropTypes.func.isRequired,
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: 'No email given!',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addMyExpense: (email) => dispatch(addExpense(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
