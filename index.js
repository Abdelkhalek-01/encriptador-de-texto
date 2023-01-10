let copyBtn = document.querySelector(".btnCopy");
let encryptDisplay = document.getElementById("textArea2");

function encrypt() {
  var textAreaInput = document.getElementById("textArea").value.toLowerCase();

  var encryptedText = textAreaInput.replace(/e/gim, "enter");
  var encryptedText = encryptedText.replace(/a/gim, "ai");
  var encryptedText = encryptedText.replace(/i/gim, "imes");
  var encryptedText = encryptedText.replace(/o/gim, "ober");
  var encryptedText = encryptedText.replace(/u/gim, "ufat");

  encryptDisplay.innerHTML = encryptedText;
}

function decrypt() {
  var textAreaInput = document.getElementById("textArea").value.toLowerCase();

  var encryptedText = textAreaInput.replace(/aimes/gim, "a");
  var encryptedText = encryptedText.replace(/enter/gim, "e");
  var encryptedText = encryptedText.replace(/imes/gim, "i");
  var encryptedText = encryptedText.replace(/ober/gim, "o");
  var encryptedText = encryptedText.replace(/ufat/gim, "u");

  encryptDisplay.innerHTML = encryptedText;
}

function copyText() {
  encryptDisplay.select();
  encryptDisplay.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(`Copied to clipboard: ${encryptDisplay.value}`);
}
