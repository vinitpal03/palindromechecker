const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value.toLowerCase();
  const reverse = reverseString(value);
  if (value === "") {
    document.getElementById("result").innerText = "";
  } else if (value === reverse) {
    document.getElementById("result").innerText = "It's A PALINDROME";
  } else document.getElementById("result").innerText = "It's Not A PALINDROME";
}
reset();
function reset() {
  input.value = "";
  document.getElementById("result").innerText = "";
}
