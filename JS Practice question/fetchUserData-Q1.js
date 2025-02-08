async function userData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("ERROR!!!", e);
  }
}

// async function displayUserData() {
//   const data = await userData();
//   console.log(data.name);
//   console.log(data.email);
// }

// displayUserData();

userData().then((data) => {
  console.log(data.name);
  console.log(data.email);
});
