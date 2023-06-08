const incBtn = document.querySelector("#save");
const incInp = document.querySelector("#income-input");
const incomeSpan = document.getElementById("income");
let income = 0;

const expBtn = document.querySelector("#add-expense-btn");
const expInp = document.querySelector("#expense-name");
const expDate = document.querySelector("#expense-date");
const expAmount = document.querySelector("#expense-amount");
const expenseSpan = document.getElementById("expense");

const resultSection = document.getElementById("results");

const remainSpan = document.getElementById("remain");

const trashIcon = document.querySelectorAll(".trash");
let totalExp = 0;

//* ------ EVENTS -------
incBtn.addEventListener("click", () => {
  if (incInp.value) {
    const incomeValue = Number(incInp.value);
    printIncome(incomeValue);
    printRemaining(incomeValue);
    income = incomeValue;
  }
});

expBtn.addEventListener("click", () => {
  if (expInp.value && expDate.value && expAmount.value) {
    const expense = {
      name: expInp.value,
      date: expDate.value,
      amount: Number(expAmount.value),
    };
    printExpense(expense);
    printRemaining(income);
  }
});

//* ------ FUNCTİONS -------
const printIncome = (value) => {
  incomeSpan.innerHTML = value;
};

const printExpense = (object) => {
  resultSection.innerHTML += `<div class="row gap-1 text-center justify-content-center mb-1">
  <div class="col col-5 added-item">${object.date}</div>
  <div class="col col-3 added-item">${object.name}</div>
  <div class="col col-2 added-item">${object.amount}</div>
  <div class="col col-1 added-item"><i class="fa-solid fa-trash-can text-danger trash"></i></div>
</div>`;
  totalExp += object.amount;
  expenseSpan.innerHTML = totalExp;
};

const printRemaining = (income) => {
  remainSpan.innerHTML = income - totalExp;
};
