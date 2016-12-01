var btn = document.querySelector("button");
var heightInput;
var keyInput;

var treeSpecs = {
                  "Height" : 0,
                  "buildKey" : 0
}

function growThatTree() {
  heightInput = document.querySelectorAll("input")[0].value;
  keyInput = document.querySelectorAll("input")[1].value;

  if (heightInput !== "" && keyInput !== "") {


    console.log(heightInput);
    console.log(keyInput);
  } else {
      alert("Both input fields must have a value!");
  }
}

btn.addEventListener("click", growThatTree)
