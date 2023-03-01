const number =50;
for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0 ){
        console.log('foobar1');
    }
   
    else if(i%5==0){
        console.log('bar');
    }
    else if(i%3==0 && i%5==0 ){
        console.log('foobar1');
    }
    else  if(i%3===0){
        console.log('foo');
    }

    else{
        console.log(i);

    }

    
}