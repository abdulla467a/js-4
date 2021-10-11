
//   var factorial = 1;
// for (var i=1; i<=7; i++){
//     console.log(i);
  
//     factorial = factorial *i;
// }


function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i<=number){
        factorial=factorial*i;
        i++;
    }
return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);