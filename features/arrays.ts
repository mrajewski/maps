const carMakers: string [] = [];
const carsMakers = ['ford', 'chevy', 'tesla'];

const dates = [new Date(), new Date(), new Date()];

// string[][]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

//Help with inference when extracting values
const car = carsMakers[0];
const myCar = carsMakers.pop();

// Prevent incompatible values
carsMakers.push(100);

// Help with 'map'
carsMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2030-10-11'); // Ok!
importantDates.push(new Date());
