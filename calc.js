function getHistory() {
  return document.getElementById("history").innerText;
}

function printHistory(num) {
  if (num == "") {
    return (document.getElementById("history").innerText = num);
  } else {
    return (document.getElementById("history").innerText = num);
  }
}

function getOutput() {
  return document.getElementById("result").innerText;
}

function printOutput(num) {
  return (document.getElementById("result").innerText = num);
}

function formattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function removeNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "remove") {
      var res = removeNumberFormat(getHistory()).toString();
      // var res = getHistory();
      if (res) {
        res = res.substr(0, res.length - 1);
        printHistory(res);
      }
    } else {
      var history = getHistory();
      if (history != "") {
        //  history = removeNumberFormat(history);
        if (this.id == "=") {
          var result = eval(history);
          var res = formattedNumber(result);
          printHistory("");
          printOutput(res);
        } else {
          history = `${history}${this.id}`;
          printOutput("");
          printHistory(history);
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    // var res = removeNumberFormat(getHistory());
    var res = getHistory();
    if (number != NaN) {
      res = res + this.id;
      printHistory(res);
    }
  });
}
