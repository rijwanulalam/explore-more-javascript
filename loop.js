function findingPositiveNum(numbers){
    const positiveArray = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number >= 0){
            positiveArray.push(number);
            // break;
            // continue;
        }
    }
    return positiveArray;
}

const numbers = [2, -3, 0, 2, 4, -5];

const result = findingPositiveNum(numbers);
console.log(result);