const myArray = ["1", "2", "3", "4", "5", "6"];
let rValue = RandArray(myArray);
console.log(rValue);

function RandArray(array) {
  let rand = (Math.random() * array.length) | 0;
  let rValue = array[rand];
  return rValue;
}
