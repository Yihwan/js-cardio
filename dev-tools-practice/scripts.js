const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string!", "happy");

// Styled
console.log("%cI am some great text.", "font-size:14px; background-color: yellow;");

// warning!
console.warn("oh NO!");

// Error :|
console.error("I am error.");

// Info
console.info("Insert fun fact.");

// Testing
console.assert(1 === 1, 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);

  console.log(`This is ${dog.name}`);
  console.log(`It is ${dog.age} years old`);

  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Yihwan');
console.count('Yihwan');

// timing
console.time('doing stuff');
console.log('hello');
console.timeEnd('doing stuff');

console.table(dogs);
