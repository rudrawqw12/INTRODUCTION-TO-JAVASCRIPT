function findingBadData(num){
    let badData=0;
  for(let i = 0;i<num.length;i++){
    const number1=num[i];

    if(number1 <0){
      badData++;
    } 

  }
  return badData;

}
const number2=[23,44,-34,-45];

const result = findingBadData(number2);
console.log(result);