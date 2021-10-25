// changeBackground = () =>
//   (document.getElementById("listId").style.backgroundColor = "#659c43");

var printValue = (num) =>
  (document.getElementById("totalAmount").innerText = num);

var priceList = document.getElementsByClassName("item1");

for (var i = 0; i < priceList.length; i++) {
  var total = 0;
  priceList[i].addEventListener("click", (e) => {

    
    if (e.target.children[1].id === undefined) {
      return;
    } else if (e.target.children[1].id == "price1") {
      document.querySelector(".item1").style.backgroundColor = "green";

      total = total + 300;
      printValue("$" + total + ".00");
    } else if (e.target.children[1].id == "price2") {
      total = total + 400;
      printValue("$" + total + ".00");
    } else if (e.target.children[1].id == "price3") {
      total = total + 250;
      printValue("$" + total + ".00");
    } else if (e.target.children[1].id == "price4") {
      total = total + 220;
      printValue("$" + total + ".00");
    }
  });
}
