function maxInArray(numbers){
    let largest =numbers[0];
    for(let i=0 ; i<numbers.length;i++){
        const element = numbers[i];
        if(element>largest && element>0){
            largest=element;
            return true;

        }
         if(element<largest && element<0){
            largest=element;
            return false;

            
        }
        
        
            
        


    }
}
    const heights = [-167,189,200,-302,405,-405];
    const tallest = maxInArray(heights);
    console.log(tallest);

