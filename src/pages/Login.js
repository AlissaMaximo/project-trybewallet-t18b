import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addEmail } from '../actions';

class Login extends React.Component {
  state = {
    password: '',
    email: '',
    isDisabled: true,
  }

  toggleButton = () => {
    const { email, password } = this.state;
    const minPasswordLength = 6;

    this.setState({
      isDisabled: true,
    });

    if (this.checkEmail(email) && password.length >= minPasswordLength) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, this.toggleButton);
  }

  checkEmail = (email) => String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  render() {
    const { isDisabled, email } = this.state;

    return (
      <form>
        <label label htmlFor="input-email">
          E-mail
          <input
            id="input-email"
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleInputChange }
          />
        </label>
        <label label htmlFor="input-password">
          Senha
          <input
            id="input-password"
            type="email"
            data-testid="password-input"
            name="password"
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => {
            const { history, addUserEmail } = this.props;
            addUserEmail(email);
            history.push('/carteira');
          } }
        >
          Entrar

        </button>
      </form>
    );
  }
}

Login.propTypes = {
  addUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  addUserEmail: (email) => dispatch(addEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
