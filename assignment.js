
// -----------------  1 --------------
function publicBusFair(number){
    // console.log(typeof number);
    if(typeof number === 'number'){
        const busMember = 50;
    const microMember = number % busMember;
    if(microMember > 11){
        const publicBusMember = microMember % 11;
        const publicBusExpense = publicBusMember * 250;
        return publicBusExpense;
    }
    else{
        return 'fillup without public bus';
    }
    }
    else{
        return 'input valid number';
    }
}

const result = publicBusFair('263');
console.log(result);