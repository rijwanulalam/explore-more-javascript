const phones = [
    {brand : 'samsung', price : 36000, color : 'black', camera : '64MP'},
    {brand : 'walton', price : 26000, color : 'white-gradient', camera : '64MP'},
    {brand : 'mi', price : 28000, color : 'blue', camera : '64MP'},
    {brand : 'nokia', price : 34000, color : 'black', camera : '64MP'},
    {brand : 'apple', price : 86000, color : 'white', camera : '64MP'},
    {brand : 'symphony', price : 16000, color : 'white', camera : '24MP'},
    {brand : 'itel', price : 15000, color : 'white', camera : '30MP'},
]

function getCheapest(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const result = getCheapest(phones);
console.log(result);