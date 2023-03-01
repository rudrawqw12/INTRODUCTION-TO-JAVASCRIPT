function isEven(number){
    const reminder =number%2;
    // console.log(reminder);
    if(reminder === 0){
        return true;
    }
    else{
        return false
    }
}
const hisNumber = isEven(38);
console.log()

const herNumber =isEven(1280);
console.log(herNumber);