const products=[
    {id :1, name :"nokia phone",price:1800},
    {id :2, name :"symphony phone",price:1800},
    {id :3, name :"samsung ",price:1800},
    {id :4, name :"nokia ",price:1800},
    {id :5, name :"I phone",price:1800}
];
function matchedProducts(products,search){
    const matched =[]; 
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product); 
        }
    }
    return matched;
}

const result =matchedProducts(products,'Phone');
console.log(result);