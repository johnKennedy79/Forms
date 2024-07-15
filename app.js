// const form = document.querySelector("form");
// const form2 = document.getElementById("f1");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(event.target.username.value);
//   const password = event.target.password.value;
//   console.log(password);
// });
// //Version one uses the event to get form inputs

// form2.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const data = new FormData(form2);
//   const formValues = Object.fromEntries(data);
//   console.log(formValues);
// });

const form = document.getElementById("funform");
const img = document.getElementById("img");
const mp3 = document.getElementById("mp3");
const showimg = {
  dog: "./assets/img/bulldog.jpg",
  cat: "./assets/img/cat.jpg",
  bird: "./assets/img/cardinal.jpg",
  squiz: "./assets/img/squirrel.jpg",
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(form);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  document.body.style.color = formValues.eyecolour;
  document.body.style.backgroundColor = formValues.colour;

  const newimg = document.createElement("img");
  newimg.src = showimg[formValues.ani];
  img.appendChild(newimg);
});
