// var student ={
//     name:'solaiman khan',
//     class:9,
//     id:115,
//     marks:98
// }

var mobile = {
    brand:'samsung',
    price:18000,
    storage:'64gb',
    camera:"7MP"
}
// console.log(mobile.price);
// mobile.brand='Apple';
// console.log(mobile)

var objects=Object.keys(mobile);
console.log(objects);

var properties = Object.values(mobile);
console.log(properties);

var propertyName='price'

var propertyValue = mobile[propertyName];
console.log(propertyName,propertyValue);