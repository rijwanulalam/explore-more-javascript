/*
chair ---- 3 cft
table -----5 cft
bed ------- 50 cft
*/


function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 50;
    const totalWood = perChairWood*chairQuantity + perTableWood*tableQuantity + perBedWood*bedQuantity;
    return totalWood;
}

const chair = 10;
const table = 5;
const bed = 2;

const result = woodCalculation(chair, table, bed);
console.log(result);