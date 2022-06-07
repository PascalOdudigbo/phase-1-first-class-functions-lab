// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(driver){ 
    const newArr = driver.slice(0,2)
    return newArr;
}

const returnLastTwoDrivers = function(driver){
    const newArr = driver.slice(-2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(input){
    return function(input){
        return input * input;
    }
}
const fareDoubler = function (fare){
    return (createFareMultiplier(fare)(fare)/fare) *2; 
}
const fareTripler = function(fare){
    return (createFareMultiplier(fare)(fare)/fare) *3;
}

function selectDifferentDrivers(drivers, firstOrLastTwo){
    if (firstOrLastTwo === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else if(firstOrLastTwo === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}