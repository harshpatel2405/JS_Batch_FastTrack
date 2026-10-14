function output() {
  return new Promise((res, rej) => {
    let a = 90;

    setTimeout(() => {
      if (a > 100) {
        res("Value is greater than 100");
      } else {
        rej("Value is not greater than 100");
      }
    }, 1000);
  });
}

async function main() {
  try {
    let ans = await output();
    console.log(ans);
  } catch (error) {
    console.log("Error : ", error);
  }
}

main();


// race ,all , any , async ,await , API 