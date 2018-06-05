// start with strings, numbers and booleans
  let age = 100;
  let age2 = age;
  console.log(age, age2); // 100 100
  age = 200;
  console.log(age, age2); // 200 100

  let name = 'West';
  let name2 = name;
  console.log(name, name2); // West West

  name = 'East';
  console.log(name, name2); // East West

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team); // ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
team[3] = 'Lux'; // team is just a reference to the original array, so this will edit both playrs and team

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); // completely new array

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;  // this will change person.age too

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 99 });


// We will hopefully soon see the object ...spread
// const captain3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// or use lodash's merge for merging child objects

const yihwan = {
  name: 'yihwan',
  age: 100,
  social: {
    twitter: 'yihwantwitter',
    facebook: 'yihwanfb'
  }
};

const dev = Object.assign({}, yihwan);
// dev.social.twitter = '@coolman' will also change yihwan!
