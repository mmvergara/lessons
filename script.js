const x = 1;
const y = "";
// deep equal ===
// truthy vs falsy value

// destructuring
const [a, b] = [1, 2];
// console.log(a, b);

const {
  name: mark,
  nested: { age: rename },
} = {
  name: "martin",
  nested: { age: 15 },
};

// console.log(mark);
// console.log(rename)

// spreading
const arr = [1, 2, 3, 4, 5];
// console.log(arr);

const spread = [1, 2, 3, 4, ...arr];
// console.log({ spread });

// function Expression
const sum = function (num) {
  console.log(num);
};

// function Declaration 
function add(num) {
  console.log(num);
}

// // arrow function
const subtract = (num) => {
  console.log(num);
};