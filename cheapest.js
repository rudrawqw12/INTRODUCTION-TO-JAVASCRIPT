const phones=[
    {name:"walton",camera:"10mp",price : 10000,color:"silver"},
    {name:"samsung",camera:"10mp",price : 20000,color:"silver"},
    {name:"vivo",camera:"10mp",price : 30000,color:"silver"},
    {name:"apple",camera:"10mp",price : 40000,color:"silver"},
];
const myphone=phones[3];
console.log(myphone);



function cheapPrice(phones){
    const myphone=phones[0];

    for(let i=0;i<phones.length;i++){
        const phone = phones[i];
        if(phone.price<myphone.price){
            myphone=phone;
        }
    }
    return myphone;
}

const selectPrice = cheapPrice(phones);
console.log(selectPrice);