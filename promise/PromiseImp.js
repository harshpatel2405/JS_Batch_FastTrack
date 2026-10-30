// * all -- all success or any failure

// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Task 1"), 3000);
// });

// const p2 = new Promise((res, reject) => {
//   setTimeout(() => reject("Task 2"), 1000);
// });

// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error : ", err));

// * race --  First result or rejection
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Task 1"), 3000);
// });

// const p2 = new Promise((res , reject) => {
//   setTimeout(() => reject("Task 2"), 1000);
// });

// Promise.race([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error : ", err));

// * any -- first success
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Task 1"), 3000);
// });

// const p2 = new Promise((res , reject) => {
//   setTimeout(() => reject("Task 2"), 1000);
// });

// Promise.any([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error : ", err));

// * allSettled --   All statuses and results
// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Task 1"), 3000);
// });

// const p2 = new Promise((res, reject) => {
//   setTimeout(() => reject("Task 2"), 1000);
// });

// Promise.allSettled([p1, p2])
//   .then((result) => console.log("Result : ", result))
//   .catch((err) => console.log("Error : ", err));


// json , object , array methods , regex , closure 