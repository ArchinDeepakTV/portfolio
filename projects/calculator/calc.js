function queryFunction() {
  var cin = document.getElementById("inQuery");
  let a = cin.value;
  let res = 0;
  let arr = new Array();
  //   console.log(typeof res);
  var text = document.getElementById("outCal");
  text.style.display = "block";
  text.innerHTML = res;
  if (cin.value == 0) text.style.display = "none";
}
