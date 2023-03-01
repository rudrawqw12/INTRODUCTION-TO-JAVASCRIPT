function evenOdd(word){
   const wordLen=  word.length;
   console.log(wordLen);
   
   const reminder = wordLen%2;
   if(reminder == 0){
    return ('even');
    
   }
   else{
    return ('odd');
   }



}

const result = evenOdd ('jacke');
console.log(result);