const shoppingCart =[
    {name:'shoe',price:3200,quantity:6},
    {name:'shirt',price:1300,quantity:3},
    {name:'pant',price:1600,quantity:2},
    {name:'belt',price:500,quantity:6},
];

function shoppingCost(shoppingCart){
    let sum =0;

    for(let i = 0 ; i<shoppingCart.length;i++){
        const shopping = shoppingCart[i];
        const totalProduct =shopping.price *shopping.quantity;
        sum = sum+totalProduct;


    }
    return sum;


}

const totalShop = shoppingCost(shoppingCart);
console.log(totalShop);
