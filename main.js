var btn = document.querySelector("button");
var input1 = document.querySelectorAll("input")[0];
var input2 = document.querySelectorAll("input")[1];
var spacer;
var tempKey;

var treeSpecs = {
                  "height" : 0,
                  "buildKey" : 0
}

function growThatTree(obj) {

  console.log(treeSpecs);
  for (var i = 1; i <= obj.height; i++) {
    console.log();

  }
}

  function checkInput() {
    heightInput = input1.value;
    keyInput = input2.value;
      if (heightInput === "" || keyInput === "") {
        alert("Both input fields must have a value!");
        return false;
    }
    spacer = " ";
    return true;
  }


btn.addEventListener("click", function() {
  if(checkInput())
  growThatTree(treeSpecs);
});

input1.addEventListener("keydown", function(e) {
  if (e.keyCode === 13)
    if(checkInput())
      growThatTree(treeSpecs);
})

input2.addEventListener("keydown", function(e) {
  if (e.keyCode === 13)
    if(checkInput())
      growThatTree(treeSpecs);

})
