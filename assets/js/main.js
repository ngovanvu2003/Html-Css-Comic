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

const dropDown = () => {
  var button = document.getElementById("myButton");

  // Hàm chạy khi trang đã tải xong
  button.classList.add("show");

  // Bắt sự kiện click vào button
  button.addEventListener("click", function () {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  });

  // Đóng dropdown nếu nhấn bên ngoài
  window.onclick = function (event) {
    if (!event.target.matches("#myButton")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
};

document.addEventListener("DOMContentLoaded", function () {
  searchForm();
  darkMode();
  toUp();
  dropDown();
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

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
  create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// start
function highlightStars(rating) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    const starValue = index + 1;
    star.classList.remove("full", "half");

    if (rating >= starValue) {
      star.classList.add("full");
    } else if (rating >= starValue - 0.5) {
      star.classList.add("half");
    }
  });
}
const starRatingDiv = document.getElementById("star-rating");
const userRating = parseFloat(starRatingDiv.getAttribute("data-value"));
highlightStars(userRating);

// chuong truyen

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active-detail"));
    contents.forEach((c) => c.classList.remove("active-detail"));

    tab.classList.add("active-detail");
    document
      .getElementById(tab.id.replace("-tab", "-content"))
      .classList.add("active-detail");
  });
});
