import config from '../config'
import TokenService from './token-api-service';

const ExpenseApiService = {
    getExpenses() {
        return fetch(`${config.API_ENDPOINT}/expenses`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${TokenService.getAuthToken()}`
            } 
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        });
    },
    deleteExpense(expenseId) {
        return fetch(`${config.API_ENDPOINT}/expenses/${expenseId}`,{
            method: 'DELETE',
            headers: {
                "content-type": "applicaiton/json",
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => res.text())
        .then(text => text.length ? JSON.parse(text) : {})
        .catch(err => {
            throw err;
        })
    },
    insertExpense(expense) {
        return fetch(`${config.API_ENDPOINT}/expenses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                expense: expense.expense,
                description: expense.description,
                date_created: expense.date_created
            })
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        })
    }
}
export default ExpenseApiService;