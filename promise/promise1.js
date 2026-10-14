// let pro = new Promise((res, rej) => {
//   let a = 900;

//   if (a > 100) {
//     res("Value is greater than 100");
//   } else {
//     rej("Value is not greater than 100");
//   }
// });

// pro
//   .then((result) => console.log("Result : ", result))
//   .catch((error) => console.log("Error : " + error));

// function output() {
//   let pro = new Promise((res, rej) => {
//     let a = 900;

//     setTimeout(() => {
//       if (a > 100) {
//         res("Value is greater than 100");
//       } else {
//         rej("Value is not greater than 100");
//       }
//     }, 1000);
//   });

//   return pro;
// }

function output() {
  return new Promise((res, rej) => {
    let a = 900;

    setTimeout(() => {
      if (a > 100) {
        res("Value is greater than 100");
      } else {
        rej("Value is not greater than 100");
      }
    }, 1000);
  });
}

let ans = output();
ans
  .then((result) => console.log("Result : " + result))
  .catch((error) => console.log("Error : " + error));
// console.log(ans);
