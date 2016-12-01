var btn = document.querySelector("button");
var input1 = document.querySelectorAll("input")[0];
var input2 = document.querySelectorAll("input")[1];
var heightInput;
var keyInput;

var treeSpecs = {
                  "height" : 0,
                  "buildKey" : 0
}

function growThatTree() {
  heightInput = input1.value;
  keyInput = input2.value;

  if (heightInput !== "" && keyInput !== "") {
    treeSpecs.height = heightInput;
    treeSpecs.buildKey = keyInput;
    console.log(treeSpecs);

  } else {
      alert("Both input fields must have a value!");
  }
}

btn.addEventListener("click", growThatTree)
