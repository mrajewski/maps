class Vehicle {
    drive(): void {
        console.log('chugga chugga');
    }

    honk():void {
        console.log('beep')
    }
}

class Car {

}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();