// // let a = 90;

// function demo() {
//     let a = 88;
//   console.log("A : " + a);
// }
// demo()
// console.log("A : " + a);

// function passed as an args .....
wrapper(callback);

function callback() {
  console.log("Callback function called");
}

function wrapper(func) {
  console.log("Wrapper Function Called");
  func();
}

// console.log(ans)
var ans = function demo() {
  console.log("demo function called");
};
// demo() not possible
console.log(ans);
ans();

const a = function () {
  console.log("Anonymous Function called....");
};

console.log(a);
a();

const res = () => 5;
console.log(res);
console.log(res());

const res1 = () => console.log(90);
console.log(res1);
res1();

const res2 = () => {
  return 5;
};
console.log(res2());
