function ticket(number){
    const first100 = 100;
    const second100 = 90;
    const rest = 70;

    if(number <= 100){
        const price = number*first100;
        return price;
    }
    else if(number <=200){
        const first100price = 100*first100;
        const restTicketQuantity = number - 100;
        const restTicketPrice = restTicketQuantity *second100;
        const totalTicketPrice =first100price+restTicketPrice;
        return totalTicketPrice;


    }
    else{
        const first100price =100*first100;
        const second200price =100*second100;

        const restTicket =number-200;
        const restTicketPrice=restTicket*rest;

        const restTotalTicketPrice =first100price+second200price+restTicketPrice;
        return restTotalTicketPrice;

    }
    
}


const totalPrice = ticket(201);
console.log(totalPrice);