function getResult() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = Number(a) + Number(b);
  document.getElementById('result').textContent = c;
}