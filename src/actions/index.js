// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addExpense = (expense) => async (dispatch) => {
  const APIdata = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => data);

  expense.exchangeRates = APIdata;

  dispatch({
    type: ADD_EXPENSE,
    expense,
  });
};
