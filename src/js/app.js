console.log('worked');

let sumCashback = 0;
const cashbackLimit = 3000;

const regularPurchase = 2000;
const regularPurchasePercent = 0.01;

const increatedPurchase = 2000;
const increatedPurchasePercent = 0.05;

const specialPurchase = 2000;
const specialPurchasePercent = 0.3;

let purchases = {
    regular: regularPurchase * regularPurchasePercent,
    increated: increatedPurchase * increatedPurchasePercent,
    special: specialPurchase * specialPurchasePercent,
};

for (let purchase in purchases) {
    sumCashback += purchases[purchase]
}
if (sumCashback > cashbackLimit){
    sumCashback === cashbackLimit;
}
console.log(sumCashback);