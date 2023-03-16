const obj = {
  name: "ron",
  arr: [1, 2, 3],
  nestedObj: { age: 18 },
};

const obj2 = {
  address: "san nicolas",
  ...obj,
};

// console.log(obj.name);
// console.log(obj.arr[0]);
// console.log(obj.nestedObj.age);

const arr = [1, 2];

// function fn(...p1) {
//   console.log(p1);
// }
// fn(1,2,3,4,5,5,5,1,21,2,2,)
