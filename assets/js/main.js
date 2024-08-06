const darkMode = () => {
  let themeToggler = document.querySelector("#theme-toggler");

  // Check the stored theme in localStorage and apply it
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("active");
    themeToggler.classList.add("fa-sun");
  } else {
    document.body.classList.remove("active");
    themeToggler.classList.remove("fa-sun");
  }

  // Toggle theme on click
  themeToggler.onclick = () => {
    themeToggler.classList.toggle("fa-sun");
    if (themeToggler.classList.contains("fa-sun")) {
      document.body.classList.add("active");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("active");
      localStorage.setItem("theme", "light");
    }
  };
};

const searchForm = () => {
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
};

const toUp = () => {
  var offset = 500;
  var duration = 750; // Converted to milliseconds

  var topUpButton = document.getElementById("top-up");
  window.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      topUpButton.style.transition = `opacity ${duration}ms`;
      topUpButton.style.opacity = 1;
    } else {
      topUpButton.style.transition = `opacity ${duration}ms`;
      topUpButton.style.opacity = 0;
    }
  });

  topUpButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  searchForm();
  darkMode();
  toUp();
});

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex";
  setTimeout(() => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500); // Match this duration to the CSS transition duration
  }, 1000); // 2000ms = 2 seconds
});

window.addEventListener("beforeunload", () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = 1;
});
