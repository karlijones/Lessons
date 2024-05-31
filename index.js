const raceResults = [
    'Sierra Leone', 
    'Fierceness', 
    'Catching Freedom', 
    'Stronghold', 
    'Resilience', 
    'Forever Young', 
    'Endlessly', 
    'Dornoch', 
    'Just A Touch', 
    'Track Phantom', 
    'West Saratoga', 
    'Just Steel', 
    'Honor Marie', 
    'Domestic Product', 
    'Catalytic', 
    'Society Man', 
    'Mystik Dan'
];

//Destructuring allows for cleaner more concise code


//Destructuring an Array = The act of unpacking elements in an array 

// const gold = [0]
// const silver = [1]
// const bronze = [2]



const [gold, silver, bronze] = raceResults;


//Destructuring an Object = The act of unpacking elements in an object

const horse = {
    name: 'Sierra Leone',
    trainer: 'Chad Brown',
    finishingPosition: 'first'
};

const {name, trainer} = horse;

const {finishingPosition: place} = horse;