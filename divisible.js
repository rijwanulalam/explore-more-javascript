for (let i = 0; i <= 50; i++){
    const num = i;
    
    if (num%3 ===0 && num%5 === 0){
        console.log('foobar');
    }
    else if (num%5 === 0){
        console.log('bar');
    }
    else if(i%3 === 0){
        console.log('foo');
    }
    else{
        console.log(num);
    }
}