function gemsToDimond(num1,num2,num3){

const frd1=num1*21;
const frd2=num2*32;
const frd3=num3*43;
const total=frd1+frd2+frd3;

if(total >2000){
    const newTotal=total-2000;
    return newTotal;
}
else{
    return total;
}

}

const result = gemsToDimond(1,1,1);
console.log(result);