const race = "100";
const winners = ["budi","sentosa","ucup"];

const win = winners.map((winner,x) => ({name: winner, race: race, place:x  }))
console.log(win);

const ages = [12,13,14,15,16]
const old = ages.filter(age => age >= 14);

console.log(old);

//Default function argumens

function callCulationBill(total,tax,tip){
    if (tax === undefined) {
        tax = 100;
    }
    if(tip === undefined){
        tip = 10;
    }

    return (total*tax) + (total*tip);
}

const totalBill = callCulationBill(100);
console.log(totalBill);