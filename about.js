console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  // console.log('form submit');
  alert("The form has been submitted successfully!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const rubberDuckImage = document.getElementById("rubberDuck");

const giveCompliment = () => {
  alert("You look like quite the dapper duck to me!");
};

rubberDuckImage.addEventListener("mouseover", giveCompliment);
