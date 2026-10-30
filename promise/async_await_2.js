const data = {
  name: "Ram",
  age: 22,
  salary: 787878,
};

function calculateBirthYear() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const by = 2026 - data.age;
      if (by < 1995) {
        rej(`you are a millenial : ${by}`);
      } else {
        res(`You are a Gen Z : ${by}`);
      }
    }, 1000);
  });
}

async function main() {
  try {
    const info = await calculateBirthYear();
    console.log("Info : ", info);
  } catch (err) {
    console.log("Error : ", err);
  }
}

main();
