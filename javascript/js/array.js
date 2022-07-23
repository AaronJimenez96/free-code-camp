/*SETUP START */
const array = [50,60,70];
let myArray =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14]
];
const playlist = [["No time to die","Billie Ellish"],["When the party's over","Biilie Ellish"]];
/*SETUP END*/
/*[[10,11,12],13,14]*/
console.log(myArray[3]);
/* [10,11,12]*/
console.log(myArray[3][0]);
/*11*/
console.log(myArray[3][0][1]);
/*13*/
console.log(myArray[3][1][0]);
/*ADD to playlist*/
playlist.push(["Bésame mucho","Ray Conniff"]);
console.log(playlist)
/*Delete 8 from myArray*/
var deleteFromMyArray = myArray.pop([2]);
console.log(deleteFromArray);
/*Delete second index of array */
let deleteFromArray = array.pop([2]);
console.log(deleteFromArray);
