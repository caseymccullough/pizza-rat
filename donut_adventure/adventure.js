const getRandInt = function(numItems)
{
    return Math.floor(Math.random() * numItems);
}

class Hero {

    constructor (name){
        this.name = name,
        this.health = 100,
        this.weapons = [
            {
                name: 'Sprinkle Spray',
                damage: 5
            },
            {
                name: 'Sugar Shock',
                damage: 10    
            }
        ],
        this.catchPhrases = [
            'i\'m fresher than day old pizza',
            'you can\'t count my calories'
        ]
    } // end constructor

    getName()
    {
        return this.name;
    }
    getHealth()
    {
        return this.health;
    }
    talkSass()
    {
        let rndPos = getRandInt(this.catchPhrases.length);
        console.log (this.catchPhrases[rndPos]);
    }

    announceHealth()
    {
        console.log(this.name + "'s health: " + this.health);
    }

    fight(enemy)
    {
        let weaponPos = getRandInt(this.weapons.length);
        console.log(this.name + ', does ' + this.weapons[weaponPos].damage +
        " damage with his " + this.weapons[weaponPos].name);
        enemy.health -= this.weapons[weaponPos].damage;
        console.log ("--" + enemy.name + " now has " + enemy.health + " health")
    }

}

class Enemy{
    constructor(name)
    {
        this.name = name,
        this.health = 100, 
        this.weapons = [
            {
                name: 'Pepperoni Stars',
                damage: 5
            },
            {
                name: 'Cheese Grease',
                damage: 10    
            }
        ], 
        this.catchPhrases = [
            'i\'m youtube famous',
            'i\'m more dangerous than an uncovered sewer'
        ]
    }


    talkSmack()
    {
        let rndPos = getRandInt(this.catchPhrases.length);
        console.log (this.catchPhrases[rndPos]);
    }

    announceHealth()
    {
        console.log(this.name + "'s health: " + this.health);
    }

    fight(hero)
    {
        let weaponPos = getRandInt(this.weapons.length);
        console.log(this.name + ', does ' + this.weapons[weaponPos].damage +
        " damage with his " + this.weapons[weaponPos].name);
        hero.health -= this.weapons[weaponPos].damage;
        console.log ("--" + hero.name + " now has " + hero.health + " health")
    }
}

let dougie = new Hero ("Dougie");
dougie.talkSass();

let pizzaRat = new Enemy("Pizza Rat");

// WALKING DOWN THE STREET

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

let battleRound = 1;
do{
    console.log ("\n\nROUND: " + battleRound);
    battleRound++;
    dougie.fight(pizzaRat);
    pizzaRat.fight(dougie);
}while (dougie.health > 0 && pizzaRat.health > 0);

if (pizzaRat.health <= 0)
{
    if (dougie.health <= 0)
    {
        console.log ("Both warriors fall dead. No one wins at war!");
    }
    else
    {
        console.log ("Pizza Rat falls.  Dougie wins!");
    }   
}
else{
    console.log ("Dougie falls.  Pizza Rat wins!");
}