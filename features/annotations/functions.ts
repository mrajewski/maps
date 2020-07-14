const add = (a: number, b: number) => {
    return a + b
};

const subtract = (a: number, b: number): number => {
    return a - b;
};


const divide = (a: number, b: number): number => {
    return a / b;
};

function multiply(a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const err = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date,
    weather: "sunny"
}

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast)