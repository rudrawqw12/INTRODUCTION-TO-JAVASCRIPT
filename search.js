const lyrics ="tumi bondhu kala pakhi";
const searchString ='Pakhi';
const lyricsLowerCase=lyrics.toLocaleLowerCase();
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

console.log(doesExist);



console.log(lyrics.indexOf("kala"));

if(lyrics.indexOf("kala") !== -1){
    console.log("yes");
}
else{
    console.log('caanot find it');
}