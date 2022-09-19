const upperScreen = document.querySelector(".upperScreen");
const lowerScreen = document.querySelector(".lowerScreen");

let upperScreenValue = "";
let parenthesesStat = false;
let parenthesesOpen = 0;
function calc(id) {
  if (
    lowerScreen.innerText == "" &&
    upperScreen.innerText != "-" &&
    !upperScreen.innerText.includes("(") &&
    upperScreen.innerText != "."
  ) {
    upperScreen.innerText = "";
    upperScreenValue = "";
  }

  if (id == "(" && parenthesesStat == false) {
    if (
      upperScreen.innerText.slice(-1) == ")" ||
      upperScreen.innerText.slice(-1) == "." ||
      upperScreen.innerText.slice(-1) == "0" ||
      upperScreen.innerText.slice(-1) == "1" ||
      upperScreen.innerText.slice(-1) == "2" ||
      upperScreen.innerText.slice(-1) == "3" ||
      upperScreen.innerText.slice(-1) == "4" ||
      upperScreen.innerText.slice(-1) == "5" ||
      upperScreen.innerText.slice(-1) == "6" ||
      upperScreen.innerText.slice(-1) == "7" ||
      upperScreen.innerText.slice(-1) == "8" ||
      upperScreen.innerText.slice(-1) == "9"
    ) {
      return;
    }
    parenthesesStat = true;
  } else if (id == "(" && parenthesesStat == true) {
    if (
      upperScreen.innerText.slice(-1) == "(" ||
      upperScreen.innerText.slice(-1) == "+" ||
      upperScreen.innerText.slice(-1) == "-" ||
      upperScreen.innerText.slice(-1) == "*" ||
      upperScreen.innerText.slice(-1) == "/" ||
      upperScreen.innerText.slice(-1) == "."
    ) {
      return;
    }
    if (upperScreen.innerText.slice(-1) == "(") {
      return;
    }
    id = ")";
    parenthesesStat = false;
  }

  if (upperScreen.innerText.length >= 20) {
    return;
  }
  upperScreenValue += id;
  let valueArr = upperScreenValue.split(".");
  if (valueArr[1] != null) {
    upperScreen.innerText =
      valueArr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      "." +
      valueArr[1];
  } else {
    upperScreen.innerText = valueArr[0]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  lowerScreen.innerText = eval(upperScreenValue);
}

let lowerScreenValue = "";
function equal() {
  let valueArr = lowerScreen.innerText.split(".");
  if (valueArr[1]) {
    upperScreen.innerText =
      valueArr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      "." +
      valueArr[1];
  } else {
    upperScreen.innerText = valueArr[0]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  lowerScreen.innerText = "";
}
function clearDisplay() {
  upperScreen.innerText = "";
  lowerScreen.innerText = "";
  upperScreenValue = "";
  parenthesesStat = false;
}
