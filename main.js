var btn = document.querySelector("button");
var heightInput;
var keyInput;

function growThatTree() {
  heightInput = document.querySelectorAll("input")[0].value;
  keyInput = document.querySelectorAll("input")[1].value;

  console.log(heightInput);
  console.log(keyInput);
}


btn.addEventListener("click", growThatTree)
