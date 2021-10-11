const num =5;
const remainder = num % 2;
console.log(remainder ==  0);

const number =150;
function isEven(number){
    if (number %2==0){

        return true;
    }
    return false;
}


const myNumber = 15464;
const isMyNumEven = isEven(myNumber);
console.log('is my number is true', isMyNumEven)
const herNumber = 1892;
const isHerNumberEvent = isEven(herNumber);
console.log('is my number is even', isHerNumberEvent);


function isOdd(number){
    if (number % 2 != 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('is her number odd',isHerNumberOdd);