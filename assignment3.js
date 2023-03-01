function isLGSeven(num){
    const number1=num-7;
    if(number1 < 7){
        return num;
    }
    else{
        const num2=number1*2;
        return num2;
    }
}

const number2 = isLGSeven(14);
console.log(number2);