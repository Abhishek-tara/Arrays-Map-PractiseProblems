let randomArray = new Array();
//iterating until length of array is 10
while (randomArray.length < 10) {
    //taking random numbers
    randomNumber = Math.floor(Math.random() * 1000);
    
    if (randomNumber >= 100 && randomNumber <= 999) {
        randomArray.push(randomNumber);
    }
}


console.log(randomArray);
//sorting array
//iterating the loop 10 times 
for (let i = 0; i < randomArray.length; i++) {
    //iterating the loop and changing position of elements by comparing to each other
    //same is done 10 times to get sorted array
    for (let j = 0; j < randomArray.length - 1; j++) {
        if (randomArray[j] > randomArray[j + 1]) {
            let x = randomArray[j];
            randomArray[j] = randomArray[j + 1];
            randomArray[j + 1] = x;
        }
    }
}

console.log(randomArray);
console.log("Second largest element: "+randomArray[8]);
console.log("Second smallest element: "+randomArray[1]);
//sorting directly by sort function
let sortedArray = randomArray.sort();
console.log(sortedArray);