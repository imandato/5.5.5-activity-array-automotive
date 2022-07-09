//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if (num + this.passenger <= this.maximumPassengers){
                this.passenger=num;
                return this.passenger;
            }else{
                console.log (this.model + " " + this.make + " cannot fit all passengers.")
            }

        } else {
            console.log(this.model + " "+ this.make + " is full and cannot take anymore passengers")
        }
    }

    start(){
        if(this.fuel > 0){
            this.started = true
            return this.started
            console.log("engine started!")
        } else{
            this.started = false
            return this.started
            console.log("engine did not start!")
        }
    }

    scheduleService(mileage){
        if (this.mileage > 3000){
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}