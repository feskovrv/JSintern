'use strict';

let money = +prompt ('Ваш бюджет на месяц?', ''),
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i=0; i<2; i++){
    let a = prompt ('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt ('Во сколько обойдется?', '');

    if ( (typeof(a))=== 'string' && (typeof(a))!= null && 
    (typeof(b))!= null && a!='' && b!= '' && a.length<50) {
            appData.expenses[a] = b;
    } else {
        i--;
    }
}

console.log(appData);

appData.moneyPerDay = appData.budget/30;

alert ("Ваш ежедневный бюджет: " + appData.moneyPerDay);