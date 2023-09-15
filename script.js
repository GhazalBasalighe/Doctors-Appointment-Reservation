//for cards page

let test = [];
async function getRequest() {
  try {
    const response = await fetch("http://localhost:3000/doctor");

    const data = await response.json();
    cardGenerator(data);
    console.log(data);
    test.push(data);
    return data;
  } catch (error) {
    console.log(error.massage);
  }
}
console.log(test);
// let test = getData();
// console.log(test);
function cardGenerator(data) {
  const container = document.querySelector(".container");
  data.forEach((element) => {
    const html = `  <div  class="card">
    <h5>${element.name}</h5>
    <h6>${element.specialty}</h6>
    <span>${element.phone}</span>
    <button id=${element.id} onclick=getId(${element.id})><a href="./book.html">MAKE AN APPOINTMENT</a></button>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
}
document.addEventListener("DOMContentLoaded", getRequest);

function getId(id) {
  const doctorId = id;
  console.log(doctorId);
  localStorage.setItem("id", id);
}
