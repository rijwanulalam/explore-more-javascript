function discount(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicket = ticketQuantity - 100;
        const restTicketPrice = restTicket * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicket = ticketQuantity - 200;
        const restTicketPrice = restTicket * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const result = discount(201);
console.log(result);