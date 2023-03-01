const names=['abul','jabul','babul','kabul','cabul','dabul','mabul'];
const unique =[];
function removeDuplicate(names){
    for(let i=0;i<names.length;i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name)===false){
            unique.push(name);
        }

    }
    
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);