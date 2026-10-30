// Create a Promise with resolve and reject

function createPromise(name, delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(name + " Completed Successfully");
      } else {
        reject(name + " Failed");
      }
    }, delay);
  });
}

// Main Menu Function

async function promiseMenu() {
  let choice;

  do {
    console.log("\n========== PROMISE MENU ==========");
    console.log("1. Promise.all()");
    console.log("2. Promise.race()");
    console.log("3. Promise.any()");
    console.log("4. Promise.allSettled()");
    console.log("5. Exit");

    choice = Number(prompt("Enter your choice: "));

    switch (choice) {
      // --------------------------------
      // 1. PROMISE.ALL()
      // --------------------------------

      case 1:
        console.log("\n--- PROMISE.ALL() ---");

        try {
          const result = await Promise.all([
            createPromise("Task 1", 2000, true),
            createPromise("Task 2", 3000, true),
            createPromise("Task 3", 1000, true),
          ]);

          console.log("All Tasks Completed:");
          console.log(result);
        } catch (error) {
          console.log("Promise Failed:", error);
        }

        break;

      // --------------------------------
      // 2. PROMISE.RACE()
      // --------------------------------

      case 2:
        console.log("\n--- PROMISE.RACE() ---");

        try {
          const result = await Promise.race([
            createPromise("Task 1", 3000, true),
            createPromise("Task 2", 1000, true),
            createPromise("Task 3", 2000, true),
          ]);

          console.log("Winner:", result);
        } catch (error) {
          console.log("Promise Failed:", error);
        }

        break;

      // --------------------------------
      // 3. PROMISE.ANY()
      // --------------------------------

      case 3:
        console.log("\n--- PROMISE.ANY() ---");

        try {
          const result = await Promise.any([
            createPromise("Task 1", 1000, false),
            createPromise("Task 2", 2000, false),
            createPromise("Task 3", 3000, true),
          ]);

          console.log("First Successful Promise:", result);
        } catch (error) {
          console.log("All Promises Failed:", error);
        }

        break;

      // --------------------------------
      // 4. PROMISE.ALLSETTLED()
      // --------------------------------

      case 4:
        console.log("\n--- PROMISE.ALLSETTLED() ---");

        const result = await Promise.allSettled([
          createPromise("Task 1", 1000, true),
          createPromise("Task 2", 2000, false),
          createPromise("Task 3", 3000, true),
        ]);

        console.log("All Tasks Finished:");

        result.forEach((item, index) => {
          console.log("\nTask " + (index + 1));

          console.log("Status:", item.status);

          if (item.status === "fulfilled") {
            console.log("Result:", item.value);
          } else {
            console.log("Error:", item.reason);
          }
        });

        break;

      // --------------------------------
      // 5. EXIT
      // --------------------------------

      case 5:
        console.log("Thank You! Program Terminated.");

        break;

      // --------------------------------
      // INVALID CHOICE
      // --------------------------------

      default:
        console.log("Invalid Choice! Please Try Again.");
    }
  } while (choice !== 5);
}

// Start Program

promiseMenu();
