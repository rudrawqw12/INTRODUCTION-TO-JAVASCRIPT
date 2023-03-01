function getAverage(assignment1,assignment2,assignment3){
    const total=assignment1+assignment2+assignment3;
    const average=total/3;
    return average;
}

const assignment1marks=60;
const assignment2marks=70;
const assignment3marks=30;

var myAverage=getAverage(assignment1marks,assignment2marks,assignment3marks);
console.log("my average so far",myAverage);

function add(num1,num2){
    const sum=num1+num2;
    return sum;

}
const result1=add(20,20);
const result2=add(20,30);
const finalResult=add(result1,result2);