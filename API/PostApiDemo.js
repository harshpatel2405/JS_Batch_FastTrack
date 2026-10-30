const url = "http://localhost:5000/demo/signup/user";

async function postData() {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Harsh Patel",
        email: "harshpatel41@gmail.com",
        gender: "male",
        password: "+Harsh-1234@",
      }),
    });

    console.log(data.status);
    console.log(data.statusText);
    console.log(await data.json());
  } catch (err) {
    console.log(err);
  }
}

postData();
