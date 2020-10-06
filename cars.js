class Vehicles { //template for creating objects

    constructor(make, model, year) { //initialises data from within the class
        this.make = make; //assign argument to local variable
        this.model = model; //assign argument to local variable
        this.year = year; //assign argument to local variable
    }

    Information() { //method
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); //outputs string with variables 
    }

}

/*let myVehicles = new Vehicles('VW', 'Golf', 2011); //invoke class, instance that takes arguments
let info = myVehicles.Information(); */ //(let) variable equal to class instance that invokes method

class Cars extends Vehicles{ //'extend' keyword inherits from Vehicles class
    constructor(make, model, year, doors){ //constructor takes 4 arguments
        super(make, model, year); //'super' keyword accesses/calls constructor from parent class
            this.doors = doors; //new variable
    }

    Information(){ //method
        super.Information(); //'super' keyword invokes method from parent class
        console.log(`Doors: ${this.doors}`); //output number of doors (not available in the Parent Class)

    }
}

let myCars = new Cars ('VW', 'Golf', 2015, 5); //object created
myCars.Information();