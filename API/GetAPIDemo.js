const url = "https://jsonplaceholder.typicode.com/posts";

// * 1. by promise
function ApiPromise() {
  fetch(url)
    .then((response) => {
      //   console.log(response);
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// ApiPromise();

// *2. by async await
async function ApiAsyncAwait() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

ApiAsyncAwait();
