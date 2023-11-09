function centimeterToMeter(centimeter){
    const meter = (centimeter / 100).toFixed(1);
    return meter;
}

const result = centimeterToMeter(90);
console.log(result);