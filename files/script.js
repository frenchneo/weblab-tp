document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    login(username, password);
  });

function login(username, password) {
  if (username === "admin" && password === "sup3rPassw0rd") {
    var token = generateToken();
    document.getElementById("message").innerHTML = "Token: " + token;
  } else {
    document.getElementById("message").innerHTML =
      "Incorrect password. Please try again.";
  }
}

function generateToken() {
  const token = "FASTFLAG-67UHGFD";

  return token;
}
