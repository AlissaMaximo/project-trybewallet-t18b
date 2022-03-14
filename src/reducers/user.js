// Esse reducer será responsável por tratar as informações da pessoa usuária
import { palavra } from '../actions';

export const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case palavra:
    return { ...state, palavrinha: `${palavrinha}s` };
  default:
    return state;
  }
};
