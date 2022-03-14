import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label label htmlFor="input-email">
          E-mail
          <input type="email" data-testid="email-input" />
        </label>
        <label label htmlFor="input-email">
          Senha
          <input type="email" data-testid="password-input" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
