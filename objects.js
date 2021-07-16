class Hamster {

    constructor(owner)
    {
        this.owner = owner;
        this.name = "";
        this.price = 15;
    }

    wheelRun = () => {
        console.log("squeak squeak");
    }

    eatFood = () => {
        console.log("nibble nibble");
    }

    getPrice = () => {
        return this.price;
    }
}

// Person Class

class Person {

    constructor (name)
    {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters =[];
        this.bankAccount = 0;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet(){
        console.log("Hello " + this.name);
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10; // bday money
    }

    buyHamster (hamster)
    {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }

}

let hamster = new Hamster ("Casey");
hamster.wheelRun();

// Creating a story . . . 

let timmy = new Person("Timmy");
console.log(timmy);

timmy.age += 5;

for (let times = 0; times < 5; times++)
{
    timmy.eat();
}
for (let times = 0; times < 5; times++)
{
    timmy.exercise();
}

for (let times = 0; times < 9; times++)
{
    timmy.ageUp();
}

let gus = new Hamster("Timmy");
console.log(gus);

timmy.buyHamster(gus);

for (let times = 0; times < 15; times++)
{
    timmy.ageUp();
}

for (let times = 0; times < 2; times++)
{
    timmy.eat();
}

for (let times = 0; times < 2; times++)
{
    timmy.exercise();
}
