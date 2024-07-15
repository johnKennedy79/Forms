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
const showimg = {
  dog: "./assets/img/bulldog.jpg",
  cat: "./assets/img/cat.jpg",
  bird: "./assets/img/cardinal.jpg",
  squiz: "./assets/img/squirrel.jpg",
};
const mp3 = document.getElementById("mp3");
const playsound = {
  dog: "./assets/mp3/dog-small.mp3",
  cat: "./assets/mp3/cat-purr.mp3",
  bird: "./assets/mp3/cardinal.mp3",
  squiz: "./assets/mp3/red_squirrel.mp3",
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
  const newsound = document.createElement("audio");
  newsound.src = playsound[formValues.ani];
  mp3.appendChild(newsound);
  newsound.setAttribute("autoplay", newsound);
});
