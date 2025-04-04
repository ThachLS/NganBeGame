function playGame() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber1 = Math.floor(Math.random() * 3);
  const randomNumber2 = Math.floor(Math.random() * 3);

  const choice1 = choices[randomNumber1];
  const choice2 = choices[randomNumber2];

  // Ẩn popup và nút "Quay lại" nếu đang hiển thị
  document.getElementById("resultPopup").classList.add("hidden");

  // Reset ảnh và xoá hiệu ứng quay trước khi bắt đầu vòng mới
  document.querySelector(".img1").classList.remove("spin");
  document.querySelector(".img2").classList.remove("spin");

  // Đảm bảo hiệu ứng quay bắt đầu từ lúc bấm "Start"
  void document.querySelector(".img1").offsetWidth;  // trick để reset animation
  void document.querySelector(".img2").offsetWidth;

  // Thêm lại hiệu ứng spin
  document.querySelector(".img1").classList.add("spin");
  document.querySelector(".img2").classList.add("spin");

  // Sau delay mới cập nhật ảnh và kết quả
  setTimeout(() => {
    // Cập nhật ảnh
    document.querySelector(".img1").setAttribute("src", "images/" + choice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/" + choice2 + ".png");

    // Logic tính kết quả
    let resultText = "";
    if (
      (choice1 === "rock" && choice2 === "scissors") ||
      (choice1 === "scissors" && choice2 === "paper") ||
      (choice1 === "paper" && choice2 === "rock")
    ) {
      resultText = "👶 Bé quá!";
    } else if (choice1 === choice2) {
      resultText = "👧 Chưa lớn lắm!";
    } else {
      resultText = "👩 Cũng lớn phết!";
    }

    // Hiển thị kết quả sau khi ảnh quay xong
    setTimeout(() => {
      // Hiển thị kết quả và popup
      document.getElementById("popupText").textContent = resultText;
      document.getElementById("resultPopup").classList.remove("hidden");

      // Hiển thị nút "Chơi lại" và "Quay lại"
      document.getElementById("replayButton").classList.remove("hidden");
      document.getElementById("resetButton").classList.remove("hidden");

      // Cập nhật lại nút "Chơi lại"
      document.getElementById("replayButton").addEventListener("click", function () {
        // Reset lại ảnh
        document.querySelector(".img1").setAttribute("src", "images/scissors.png");
        document.querySelector(".img2").setAttribute("src", "images/scissors.png");

        // Ẩn popup khi bấm "Chơi lại"
        document.getElementById("resultPopup").classList.add("hidden");

        // Xoá các lớp "spin" và thêm lại để kích hoạt lại hiệu ứng quay
        document.querySelector(".img1").classList.remove("spin");
        document.querySelector(".img2").classList.remove("spin");
        void document.querySelector(".img1").offsetWidth;  // Trick để reset animation
        void document.querySelector(".img2").offsetWidth;
        document.querySelector(".img1").classList.add("spin");
        document.querySelector(".img2").classList.add("spin");

        // Kích hoạt lại game
        playGame();
      });
    }, 1000); // Delay 1 giây sau khi ảnh quay xong

  }, 1000); // Delay 1 giây trước khi hiển thị ảnh
}

// Thêm sự kiện cho nút "Quay lại"
document.getElementById("resetButton").addEventListener("click", function () {
  // Reset ảnh về trạng thái ban đầu
  document.querySelector(".img1").setAttribute("src", "images/scissors.png");
  document.querySelector(".img2").setAttribute("src", "images/scissors.png");

  // Ẩn popup nếu đang hiển thị
  document.getElementById("resultPopup").classList.add("hidden");

  // Reset lại kết quả, ẩn các popup và hiệu ứng
  document.querySelector("h1").innerHTML = "Ngân Lớn hay Bé?";

  // Đảm bảo hiệu ứng quay có thể bắt đầu lại
  document.querySelector(".img1").classList.remove("spin");
  document.querySelector(".img2").classList.remove("spin");
  void document.querySelector(".img1").offsetWidth;  // Trick để reset animation
  void document.querySelector(".img2").offsetWidth;

  // Ẩn nút "Quay lại" khi trở về trạng thái ban đầu
  document.getElementById("resetButton").classList.add("hidden");
});
