var mobile = {
    brand:'samsung',
    price:18000,
    storage:'64gb',
    camera:"7MP"
}

const keys =Object.keys(mobile);
console.log(keys);
const values =Object.values(mobile);
console.log(values);

for(var i=0;i<keys.length;i++){
    var propertyName=keys[i]
    var propertyValue =mobile[propertyName]
    // console.log(propertyName,propertyValue);    
}

for(var propertyName in mobile){
    console.log(propertyName);
}
