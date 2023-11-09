const numbers = [2, 3, 5, 5, 6, 76, 22];
const partial = numbers.slice(1, 4);

partial.push(20);
console.log(partial);

const numbers2 = [2, 3, 5, 5, 6, 76, 22, 30];
const partial2 = numbers2.splice(2, 4);
console.log(partial2);