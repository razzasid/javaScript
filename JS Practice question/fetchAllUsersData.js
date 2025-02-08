// async function userData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// }

// userData()
//   .then((data) => {
//     const myData = [];
//     for (const element of data) {
//       const elements = {
//         name: element.name,
//         email: element.email,
//       };

//       myData.push(elements);
//     }
//     return myData;
//   })
//   .then((data) => {
//     const filterData = data.filter((item) => item.email.endsWith(".biz"));
//     // console.log(filterData);

//     for (const element of filterData) {
//       console.log(`Name: ${element.name}`);
//       console.log(`Email: ${element.email}`);
//     }
//   });

async function userData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Extract only name and email
    const myData = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));

    // Filter users with ".biz" emails
    const filteredData = myData.filter((user) => user.email.endsWith(".biz"));

    return filteredData;
  } catch (e) {
    console.log("ERROR!!!", e);
  }
}

// Call function and display results
(async () => {
  const users = await userData();
  users.forEach((user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  });
})();
