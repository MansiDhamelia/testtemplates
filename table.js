
show = () => {
  var result = "";
  var getValue;
  getValue = Number(document.getElementById("number").value);
  for (var i = 0; i <= 10; i++) {
    result = result + "<p>" + getValue + "*" + i + "=" + getValue * i + "</p>";
  }
  document.getElementById("result").innerHTML = result;
};
