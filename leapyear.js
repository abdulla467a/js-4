function isLeapYear(year){
    if(year %4 ==0){
        return true;
    }
    else{
        return false;

    }
}
const myYear = 2088;
const isMyYerLeapYear = isLeapYear(myYear);
console.log('is my year leap year', isMyYerLeapYear);


const yourYear = 1225;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is my year leap year',isYourYearLeapYear);