term();

function a() {
  var e = document.getElementById("storage");
  e.innerHTML += "<p style='font-size:120%'>The time has come!</b></p>";
}
function term() {
  var now = new Date();
  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;
  var seconds = document.getElementById("seconds").value;
  var term = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    seconds,
    0
  );
  setTimeout(a, term - now);
  var e = document.getElementById("storage");
  var diff = Math.round((term.getTime() - now.getTime()) / 1000);
  e.innerHTML += "<p><p>Will occur in " + diff + " seconds...</b></p>";
}
