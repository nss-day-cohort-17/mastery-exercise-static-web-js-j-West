var btn = document.querySelector("button");
var input1 = document.querySelectorAll("input")[0];
var input2 = document.querySelectorAll("input")[1];
var heightInput;
var keyInput;

var treeSpecs = {
                  "Height" : 0,
                  "buildKey" : 0
}

function growThatTree() {
  heightInput = input1.value;
  keyInput = input2.value;

  if (heightInput !== "" && keyInput !== "") {


    console.log(heightInput);
    console.log(keyInput);
  } else {
      alert("Both input fields must have a value!");
  }
}

btn.addEventListener("click", growThatTree)
