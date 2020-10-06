class BMI { //the class is the blueprint for creating objects
    constructor(height, weight) {   //constructor takes 2 arguments
        this.height = height; //local instance 1
        this.weight = weight;   //local instance 2
    }

    calculateBMI() { //method
        let bmi = this.weight / (this.height ** 2); //BMI formula
        return bmi; //returns formula
    }

}

let MyBmi = new BMI(2, 90); //variable that invokes class, add in height & weight
let calculateBMI = MyBmi.calculateBMI(); //variable equals to method
console.log(calculateBMI); //sum of formula