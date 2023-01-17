const buttonBigger = () => {
  document.getElementById("ta").style.fontSize = "24pt";
};

const buttonMoo = () => {
  document.getElementById("ta").style.textTransform = "uppercase";
  var str = document.getElementById("ta").value;
  var parts = str.split(".");
  str = parts.join("-Moo. ");
  document.getElementById("ta").value = str;
};

const radioFancify = () => {
  document.getElementById("ta").style.fontWeight = "bold";
  document.getElementById("ta").style.color = "blue";
  document.getElementById("ta").style.textDecoration = "underline";
};

const radioBoring = () => {
  document.getElementById("ta").style.fontWeight = "";
  document.getElementById("ta").style.color = "black";
  document.getElementById("ta").style.textDecoration = "";
};
