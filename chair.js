function woodreq(chair,table,bed){
    const perchairwood=3;
    const pertablewood=10;
    const perBedwood=50;
    const chairwood=perchairwood*chair;
    const tablewood=pertablewood*table;
    const bedwood=perBedwood*bed;

    const totalwood= chairwood+tablewood+bedwood;
    return totalwood;
}

const totalwood1=woodreq(2,2,5);
console.log(totalwood1);