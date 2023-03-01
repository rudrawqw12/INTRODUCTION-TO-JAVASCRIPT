function getSUm(numbers){
    let sum=0;
    for(let i = 0 ; i<numbers.length;i++){
        const index =i;
        const elements =numbers[index];
        if(elements % !2 ==0){
            console.log(index,elements);


         }

    }
}
const myNumbers =[12,123,32,12,34];
getSUm(myNumbers);