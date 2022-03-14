// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { palavra2 } from '../actions';

export const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case palavra2:
    return { ...state };
  default:
    return state;
  }
};
