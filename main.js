var btn = document.querySelector("button");
var input1 = document.querySelectorAll("input")[0];
var input2 = document.querySelectorAll("input")[1];
var spacer;

var treeSpecs = {
                  "height" : 0,
                  "buildKey" : 0
}

function growThatTree(obj) {
  for (var i = 1; i <= obj.height; i++) {
    console.log(spacer.repeat(obj.height - i) + obj.buildKey + obj.buildKey.repeat((i -1) * 2));
  }
}

  function checkInput() {
    treeSpecs.height = input1.value;
    treeSpecs.buildKey = input2.value;
      if (treeSpecs.height === "" || treeSpecs.buildKey === "") {
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
