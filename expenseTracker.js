function sum(transactions){
    return transactions.reduce((acc, t) => {
        if (t.amount > 0) acc.income += t.amount;
        else acc.expense += Math.abs(t.amount);
        return acc;
    }, { income: 0, expense: 0 });
}

function handleSubmit(text, amount, transactions) {
    if (!text || text.trim() === "" || amount === 0) return transactions;

    let maxId = 0;
    transactions.forEach(t => {
        if (t.id > maxId) maxId = t.id;
    });

    const newTransaction = {
        id: maxId + 1,
        text: text,
        amount: amount
    };

    return [...transactions, newTransaction];
}

function renderTransactions(transactions) {
    return transactions.map(t => `${t.text} : ${t.amount}`);
}


function deleteTransaction(transactions, id) {
    return transactions.filter(t => t.id !== id);
}

function processData(input) {
    const lines = input.trim().split("\n");
    let i = 0;

    const n = parseInt(lines[i++]);
    let transactions = [];

    for (let j = 0; j < n; j++) {
        const [text, amt] = lines[i++].split(" ");
        transactions.push({
            id: j + 1,
            text: text,
            amount: parseInt(amt)
        });
    }

    const newText = lines[i++];
    const newAmount = parseInt(lines[i++]);
    const deleteId = parseInt(lines[i++]);

    transactions = handleSubmit(newText, newAmount, transactions);
    transactions = deleteTransaction(transactions, deleteId);

    const totals = sum(transactions);
    const renderedList = renderTransactions(transactions);

    console.log(JSON.stringify({
        transactions: transactions,
        totals: totals,
        renderedList: renderedList
    }));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});