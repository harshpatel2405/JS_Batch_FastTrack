function getOrder(orderID, callback) {
  setTimeout(() => {
    console.log(orderID + " - Order Placed Successfully");
    callback();
  }, 1000);
}

function processPayment(paymentID, callback) {
  setTimeout(() => {
    console.log(paymentID + " - Payment Processed Successfully");
    callback();
  }, 1000);
}

function getBill(billID, callback) {
  setTimeout(() => {
    console.log(billID + " - Bill Generated Successfully");
    callback();
  }, 1000);
}

function prepareOrder(callback) {
  setTimeout(() => {
    console.log("4 - Order Prepared Successfully");
    callback();
  }, 1000);
}

function packOrder(callback) {
  setTimeout(() => {
    console.log("5 - Order Packed Successfully");
    callback();
  }, 1000);
}

function shipOrder(callback) {
  setTimeout(() => {
    console.log("6 - Order Shipped Successfully");
    callback();
  }, 1000);
}

function deliverOrder(callback) {
  setTimeout(() => {
    console.log("7 - Order Delivered Successfully");
    callback();
  }, 1000);
}

// CALLBACK HELL: 7 NESTED CALLBACKS
getOrder(101, function () {
  processPayment(102, function () {
    getBill(103, function () {
      prepareOrder(function () {
        packOrder(function () {
          shipOrder(function () {
            deliverOrder(function () {
              console.log("All steps completed successfully!");
            });
          });
        });
      });
    });
  });
});

// function getOrder(orderID, callback) {
//   setTimeout(() => {
//     console.log(orderID + " - Order Placed Successfully");
//     callback();
//   }, 1000);
// }

// function processPayment(paymentID, callback) {
//   setTimeout(() => {
//     console.log(paymentID + " - Payment Processed Succesfully");
//     callback();
//   }, 1000);
// }

// function getBill(billID, callback) {
//   setTimeout(() => {
//     console.log(billID + " - Bill generated Successfully");
//   callback();
//   }, 1000);
// }

// getOrder(101, function () {
//   processPayment(102, function () {
//     getBill(103, function () {
//       setTimeout(() => {
//         console.log("All Steps complete successfully..wait for your order");
//       }, 1000);
//     });
//   });
// });
