const names = ['abul', 'kabul', 'babul', 'abul', 'dabul', 'akbul', 'kabul', 'habul', 'babul']

function duplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const result = duplicate(names);
console.log(result);