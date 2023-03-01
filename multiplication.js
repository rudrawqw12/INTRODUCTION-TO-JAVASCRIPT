// 1*2*3*4*5//

function multiplication(number){
    let result=1
    for(let i=1; i<number;i++){
        result=result*i;


    }
    return result;
}

const result = multiplication(7);
console.log(result);