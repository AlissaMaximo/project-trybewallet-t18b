import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default function App() {
  return (
    <>
      <Route exact path="/" component={ (props) => <Login { ...props } /> } />
      <Route exact path="/carteira" component={ (props) => <Wallet { ...props } /> } />
    </>
  );
}
