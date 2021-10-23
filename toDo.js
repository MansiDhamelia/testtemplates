// for close button
var list = document.getElementsByTagName("LI");
console.log(list);
var i;

for (i = 0; i < list.length; i++) {
  var btn = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  list[i].appendChild(btn);
}

//for checked item
var lvalue = document.querySelector("ul");
lvalue.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

// for add item
let add = () => {
  var li = document.createElement("li");
  var inputValue = document.getElementById("txtId").value;
  var txtValue = document.createTextNode(inputValue);
  li.appendChild(txtValue);

  if (inputValue == "") {
    alert("Please add item!");
  } else {
    document.getElementById("listId").appendChild(li);
  }
  document.getElementById("txtId").value = "";

  var btn = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  li.appendChild(btn);
};

//for delete item
var dlt = document.getElementsByClassName("close");

for (i = 0; i < dlt.length; i++) {
  dlt[i].onclick = (e) => {
    e.target.parentNode.style.display = "none";
  };
}
