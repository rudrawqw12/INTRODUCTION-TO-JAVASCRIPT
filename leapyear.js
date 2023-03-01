function isLeapYear(year){
    const reminder=year%4;
    if(reminder===0){
        return true;
    }
    else{
       return  false;
    }
}

const isYearLeapYear=isLeapYear(2009);
console.log(isYearLeapYear);