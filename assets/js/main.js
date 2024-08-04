let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const themeToggler = document.querySelector("#on-search");
  const content = document.querySelector("#content-search");
  const overlay = document.querySelector("#overlay");

  themeToggler.addEventListener("click", function () {
    content.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  // Thêm sự kiện click cho overlay và document để ẩn nội dung khi click ra ngoài
  document.addEventListener("click", function (event) {
    if (content.classList.contains("show")) {
      // Kiểm tra nếu người dùng nhấn ra ngoài nội dung
      if (
        !content.contains(event.target) &&
        !themeToggler.contains(event.target)
      ) {
        content.classList.remove("show");
        overlay.classList.remove("show");
      }
    }
  });
});
