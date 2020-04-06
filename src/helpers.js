export const findExpense = (expenses = [], expenseId) => 
    expenses.find(expense => expense.id === expenseId)
