'use strict';

let money = prompt ('Ваш бюджет на месяц?', ''),
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    myMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let rashod1 = prompt ('Введите обязательную статью расходов в этом месяце', ''),
    summa1 = prompt ('Во сколько обойдется?', ''),
    rashod2 = prompt ('Введите обязательную статью расходов в этом месяце', ''),
    summa2 = prompt ('Во сколько обойдется?', '');

appData.expenses.rashod1 = summa1;
appData.expenses.rashod2 = summa2;

let day = (money - summa1 - summa2) / 30;
alert (`Бюджет на 1 день ${day} рублей`);