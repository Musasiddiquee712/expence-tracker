document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (description && !isNaN(amount)) {
        addExpense(description, amount);
        updateTotal(amount);
    }

    // Clear input fields
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});

let totalExpense = 0;

function addExpense(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = `${description}: $${amount.toFixed(2)}`;
    expenseList.appendChild(li);
}

function updateTotal(amount) {
    totalExpense += amount;
    document.getElementById('total').textContent = totalExpense.toFixed(2);
}