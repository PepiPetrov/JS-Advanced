class Parking {
    constructor(capacity, vehicles = []) {
        this.capacity = Number(capacity);
        this.vehicles = vehicles;
        this.currentlyAdded = 0;
    }
    addCar(carModel, carNumber) {
        if (this.capacity <= this.currentlyAdded) {
            throw new Error("Not enough parking space.");
        }
        this.currentlyAdded++;
        this.vehicles.push({
            carModel: carModel,
            carNumber: carNumber,
            payed: false,
        });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    findingCar(number) {
        return this.vehicles.find((x) => x.carNumber === number);
    }
    removeCar(carNumber) {
        let needCar = this.findingCar(carNumber);
        if (!needCar) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (needCar.payed === false) {
            throw new Error(
                `${carNumber} needs to pay before leaving the parking lot.`
            );
        }
        this.vehicles = this.vehicles.filter(x => x !== needCar)
        this.currentlyAdded--;
        return `${carNumber} left the parking lot.`;
    }
    pay(carNumber) {
        let needCar = this.findingCar(carNumber);
        if (!needCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (needCar.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        needCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }
    getStatistics(carNumber) {
        let needCar = this.findingCar(carNumber);
        if (carNumber) {
            return `${needCar.carModel} == ${needCar.carNumber} - ${needCar.payed ? `Has payed` : `Not payed`
                }`;
        }
        let result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`];
        this.vehicles
            .sort((a, b) => {
                return a.carModel.localeCompare(b.carModel);
            })
            .map((x) => {
                result.push(`${x.carModel} == ${x.carNumber} - ${x.payed ? `Has payed` : `Not payed`}`);
            });
        return result.join("\n");
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));