let items = document.querySelectorAll(".slider .item");
let active = 3;

function loadShow() {
  items.forEach((item) => {
    item.style.transform = "";
    item.style.zIndex = "";
    item.style.filter = "";
    item.style.opacity = "";
  });

  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  // Show items after the active item
  let stt = 0;
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  // Show items before the active item
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

loadShow();

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = function () {
  active = (active + 1) % items.length; // Loop to the start
  loadShow();
};

prev.onclick = function () {
  active = (active - 1 + items.length) % items.length; // Loop to the end
  loadShow();
};

// Auto-next every 3 seconds
setInterval(() => {
  next.onclick(); // Trigger the next button click
}, 5000);
