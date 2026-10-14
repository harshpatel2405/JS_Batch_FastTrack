function getOrder(callback1, callback2) {
  setTimeout(() => {
    console.log("Order Placed Successfully");
    callback1(callback2);
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment Processed Succesfully");
    callback();
  }, 1000);
}

function getBill() {
  setTimeout(() => {
    console.log("Bill generated Successfully");
  }, 1000);
}

getOrder(processPayment, getBill);
// console.log("Wait for food to be ready");


// closure
// callback hell
// promise 
// async await  