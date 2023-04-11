let btn = document.getElementById("btn");
let spinner = document.getElementById("spinner");
btn.addEventListener("click", async () => {
  box.innerHTML = `<h1>Loading...</h1>`;
  let url = "https://randomuser.me/api/";
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let dob = data.results[0].dob.date.slice(0, 10);
      box.innerHTML = `
        <p ><span>First Name: </span> ${data.results[0].name.first}</p>
        <p><span>Last Name: </span> ${data.results[0].name.last}</p>
        <p><span>Gender: </span> ${data.results[0].gender}</p>
        <p><span>Country: </span> ${data.results[0].location.country}</p>
        <p><span>PostCode: </span> ${data.results[0].location.postcode}</p>
        <p><span>Email: </span> ${data.results[0].email}</p>
        <p><span>Dob: </span> ${dob}</p>
        <img src='${data.results[0].picture.large}' />
        <p><span>Phone: </span> ${data.results[0].phone}</p>
        `;
      console.log(data);
    });
});
