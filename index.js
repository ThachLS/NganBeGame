var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // image 1
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); // image 2
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Ngân Bé!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Ngân Lớn!";
}
else {randomNumber1 === randomNumber2
  document.querySelector("h1").innerHTML = "🏳 Ngân Chưa Lớn Lắm!";
}
