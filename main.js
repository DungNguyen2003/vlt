// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Hiii ♡♡♡ Chúc Mike Valentine vui vẻ, sớm tìm kiếm được hạnh phúc lâu bền nha !! Với cả là bớt cau có hơn nhé, cái này vô tình anh kiếm được làm xàm xàm thôi đừng bảo anh trẻ trâu :))  ｡◕‿◕｡ Happy Valentine";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
