function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("outCal");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function queryFunction() {
  var cin = document.getElementById("inQuery");
  let a = cin.value;
  let res = 0;

  let part = a.slice(a.length - 1);
  console.log(part);

  //   console.log(typeof res);
  var text = document.getElementById("outCal");
  text.style.display = "block";
  text.innerHTML = res;
  if (cin.value == 0) text.style.display = "none";
}
