import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';

class Wallet extends React.Component {
  state = {
    value: 0,
    desc: '',
    currency: 'valor-temporario',
    method: 'cash',
    tag: 'food',
    id: 0,
    currencies: [],
  }

  componentDidMount = async () => {
    const currencies = await fetch('https://economia.awesomeapi.com.br/json/all').then((response) => response.json());

    delete currencies.USDT;

    const organizedCurrencies = Object.entries(currencies);
    this.setState({ currencies: organizedCurrencies });
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleButtonAddExpense = () => {
    const { addMyExpense } = this.props;
    const { value, desc, currency, method, tag, id } = this.state;
    addMyExpense({ value, desc, currency, method, tag, id });
  }

  showOptions = () => {
    const { currencies } = this.state;
    const options = [];
    currencies.forEach((currencyArr) => {
      const currencyAcronym = currencyArr[0];
      options.push((
        <option
          data-testid={ currencyAcronym }
          key={ currencyAcronym }
          value={ currencyAcronym }
        >
          {currencyAcronym}
        </option>
      ));
    });
    return options;
  }

  render() {
    const { email } = this.props;
    const { currencies, id } = this.state;

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
              { currencies.length !== 0
                && this.showOptions()}
            </select>
          </label>
          <label htmlFor="select-currency">
            Método de pagamento
            <select
              data-testid="method-input"
              id="select-payment-method"
              name="method"
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
          <button
            type="button"
            onClick={ () => {
              this.setState({ id: id + 1 });
              this.handleButtonAddExpense();
            } }
          >
            Adicionar despesa
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
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
  addMyExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
