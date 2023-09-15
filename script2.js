//for book page

let result = [];
async function getRequest() {
  console.log(localStorage.getItem("id"));
  try {
    const response = await fetch(
      `http://localhost:3000/doctor/${localStorage.getItem("id")}`
    );
    const data = await response.json();
    generateOption(data);
    result.push(data);
  } catch (error) {
    console.log(error);
  }
}
console.log(result);
function generateOption(data) {
  const drField = document.getElementById("doctor");
  drField.value = data.name;
  const timeSection = document.getElementById("timing");
  data.date.forEach((element) => {
    const newTime = new Date(+element).toLocaleString();
    const html = `<option value="${element}">${newTime}</option>`;
    timeSection.insertAdjacentHTML("beforeend", html);
  });
}
document.addEventListener("DOMContentLoaded", getRequest);

const btn = document.querySelector(".submit");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const select = document.getElementById("timing");
  let selectedTime = select.value;
  console.log(result[0].date);
  let patchdata = result[0].date.filter((time) => time != selectedTime);
  result[0].date = patchdata;
  const form = document.querySelector(".card-form");
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  (async function postRequest() {
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });
  })();
  fetch(`http://localhost:3000/doctor/${localStorage.getItem("id")}`, {
    method: "PATCH",
    body: JSON.stringify(result[0]),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => (window.location.href = "./cards.html"));
});
//toggle select class for arrow down svg
const selectInput = document.querySelector("select");
const arrowDown = document.querySelector(".arrow-down");

let isClicked = false;

selectInput.addEventListener("click", () => {
  if (isClicked) {
    arrowDown.style.transform = "rotate(0deg)";
    isClicked = false;
  } else {
    arrowDown.style.transform = "rotate(180deg)";
    isClicked = true;
  }
});
