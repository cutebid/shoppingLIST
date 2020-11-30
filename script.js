    //   shoppingLIST
//  Create a variable(myList) of array

let myList = [
               ["Bournvita", 1],
               ["Milk", 2],
               ["Oatmilk", 2],
               ["Cornflakes", 1],
               ["Honey", 3],
               ["CubeSugar", 4],
               ["Biscuit", 30],
               ["Facecream", 1]
];

//  Remove the first and the last elements

const shift = [myList.shift()];
const pop =  [myList.pop() ];
console.log(shift);


// Save the removed element in another array
let shiftpop = shift.concat(pop);
 console.log(shiftpop);
 console.log(myList)


// Adding another element to the 3rd element of the array

myList.splice(2,1, ["Orange Juice", 17]);
// console.log(myList);

// Looping through an array myList and returning the elements as an object

var objName = {};
for(let i = 0; i < myList.length; i++) {
    let list = myList[i];
    objName[list[0]] = list[1]
}
    console.log(objName);