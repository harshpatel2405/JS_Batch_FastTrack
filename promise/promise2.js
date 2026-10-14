// Promise.resolve(10)
//   .then((number) => {
//     console.log(number);
//     return number * 2;
//   })
//   .then((number) => {
//     console.log(number);
//     return number + 5;
//   })
//   .then((number) => {
//     console.log(number);
//   })
//   .catch((error) => {
//     console.log("Error : " + error);
//   });

function getOrder(orderID) {
  let success = false;

  let pro = new Promise((res, rej) => {
    if (success) {
      setTimeout(() => {
        res(orderID + " - Order Placed Successfully");
      }, 1000);
    } else {
      rej("Order Not Placed Successfully..");
    }
  });

  return pro;
}

function processPayment(paymentID) {
  let success = true;

  let pro = new Promise((res, rej) => {
    if (success) {
      setTimeout(() => {
        res(paymentID + " - Payment Processed Succesfully");
      }, 1000);
    } else {
      rej("Payment Not Processed Successfully..");
    }
  });

  return pro;
}

function getBill(billID) {
  let success = true;

  let pro = new Promise((res, rej) => {
    if (success) {
      setTimeout(() => {
        res(billID + " - Bill generated Successfully");
      }, 1000);
    } else {
      rej("Bill Not generated Successfully..");
    }
  });

  return pro;
}

getOrder(101)
  .then((result) => {
    console.log("Result : ", result);
    return processPayment(102);
  })
  .then((result) => {
    console.log("Result : ", result);
    return getBill(103);
  })
  .then((result) => {
    console.log("Result : ", result);
    console.log("Food will ready in a while");
  })
  .catch((error) => {
    console.log("Error : " + error);
    console.log("Try Again ....");
  });
