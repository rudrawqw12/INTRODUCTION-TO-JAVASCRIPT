function sum(num){
    if(num==1){
        return 1;
    }
    return num+sum(num-1);
}
const result = sum(5);
console.log(result);