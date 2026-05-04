function generatePassword() {
  const length = document.getElementById("length").value;
  const upper = document.getElementById("uppercase").checked;
  const lower = document.getElementById("lowercase").checked;
  const symbols = document.getElementById("symbols").checked;

  let chars = "";

  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
  if (symbols) chars += "!@#$%^&*()_+";

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  document.getElementById("result").value = password;
}

function copyPassword() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("Copied!");
}