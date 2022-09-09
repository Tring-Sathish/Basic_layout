var acc = document.getElementsByClassName("tab_button");
var i, j;

for (i = 0; i < acc.length; i++) {
  console.log(acc[i]);
  acc[i].addEventListener("click", function () {
    removeToggle();
    this.classList.toggle("tab_button--active");
  });
}
function removeToggle() {
  var ele = document.getElementsByClassName("tab_button");
  var j;
  for (j = 0; j < ele.length; j++) {
    console.log(ele);
    if (ele[j].classList.contains("tab_button--active")) {
      ele[j].classList.remove("tab_button--active");
    }
  }
}
