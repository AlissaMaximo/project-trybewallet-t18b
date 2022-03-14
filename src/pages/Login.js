import React from 'react';

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

    if (this.verifyEmail(email) && password.length >= minPasswordLength) {
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

  verifyEmail = (email) => {
    (String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
  };

  render() {
    const { isDisabled } = this.state;

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
        <button type="submit" disabled={ isDisabled }>Entrar</button>
      </form>
    );
  }
}

export default Login;
