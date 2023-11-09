const shoppingCart = [
    {name : 'shoe', price : 1200, item : 1},
    {name : 'shirt', price : 600, item : 2},
    {name : 'pant', price : 800, item : 3},
    {name : 'watch', price : 1500, item : 1},
    {name : 'belt', price : 500, item : 2},
    {name : 'tie', price : 350, item : 2},
    {name : 'bag', price : 1100, item : 1}
]

function cart(shoppingCart){
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        const item = shoppingCart[i];
        const itemTotal = item.price * item.item;
        total = total + itemTotal;
    }
    return total;
}

const result = cart(shoppingCart);
console.log(result);