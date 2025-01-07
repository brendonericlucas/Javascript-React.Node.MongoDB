// pass amount values as args to function
function calculateTotalAmount(amount1, amount2, amount3) {

    let totalAmount = amount1 +  amount2 + amount3;

    document.getElementById('totalAmount').innerText = `The total amount is:$ ${totalAmount}`;

}

// to call function with parameters, use the below in the on-click event in the html file:
//calculateTotalAmount(parseFloat(document.getElementById('amount1').value), parseFloat(document.getElementById('amount2').value), parseFloat(document.getElementById('amount3').value))

