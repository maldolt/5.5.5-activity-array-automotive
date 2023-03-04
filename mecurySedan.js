//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

class car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make ,model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed =160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if(this.passengers < this.maximumPassengers){
            console.log('Enough seats available')
        } else {
            console.log('Not enogh seats')
        }

    }

    start(){
        if(this.fuel <0){
            console.log('No fuel');
            return this.start = false;
        } else {
            console.log("Engine is on");
            return this.start = true;
        }

    }

    scheduleService(mileage){
        if (this.mileage > 30000){
            this.scheduleService = true;
            return this.scheduleService;
        }
            console.log('time for maintenance')
    }
} 
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
 console.log(v.make)

 v.start()
 v.loadPassenger()
 v.stop()
 v.scheduleService()

 console.log(v)