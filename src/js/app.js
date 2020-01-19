const cashbackLimit = 3000;

const REGULAR_CATEGORY = 'regular';
const INCREATED_CATEGORY = 'increated';
const SPECIAL_CATEGORY = 'special';
const purchases = [
    {
        amount: 2_000,
        regularPercent: 0.01,
        category: REGULAR_CATEGORY,
    },
    {
        amount: 2_000,
        increatedPercent: 0.05,
        category: INCREATED_CATEGORY,
    },
    {
        amount: 2_000,
        specialPercent: 0.3,
        category: SPECIAL_CATEGORY,
    },
];

let cashback = 0;

for (const purchase of purchases) {
    if(purchase.category === REGULAR_CATEGORY){
        cashback += purchase.amount * purchase.regularPercent;
    }
    else if (purchase.category === INCREATED_CATEGORY){
        cashback += purchase.amount * purchase.increatedPercent;
    }
    else if (purchase.category === SPECIAL_CATEGORY){
        cashback += purchase.amount * purchase.specialPercent;
    }
}
if (cashback > cashbackLimit){
    cashback = cashbackLimit;
}
console.log(cashback);