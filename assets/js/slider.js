document.addEventListener("DOMContentLoaded", function () {
  function cascadeSlider(container, options) {
    const itemClass = options.itemClass || "cascade-slider_item";
    const arrowClass = options.arrowClass || "cascade-slider_arrow";
    const items = container.querySelectorAll(`.${itemClass}`);
    const arrows = container.querySelectorAll(`.${arrowClass}`);
    const dots = container.querySelectorAll(".cascade-slider_dot");
    const itemCount = items.length;
    let currentIndex = 0;

    function changeIndex(newIndex) {
      items.forEach((item, index) => {
        item.classList.remove("now", "prev", "next");
        if (index === newIndex) {
          item.classList.add("now");
        } else if (
          index === newIndex - 1 ||
          (newIndex === 0 && index === itemCount - 1)
        ) {
          item.classList.add("prev");
        } else if (
          index === newIndex + 1 ||
          (newIndex === itemCount - 1 && index === 0)
        ) {
          item.classList.add("next");
        }
      });
    }

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("cur", index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % itemCount;
      changeIndex(currentIndex);
      updateDots();
    }

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        const action = arrow.getAttribute("data-action");
        if (action === "next") {
          nextSlide();
        } else if (action === "prev") {
          currentIndex = (currentIndex - 1 + itemCount) % itemCount;
          changeIndex(currentIndex);
          updateDots();
        }
      });
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        changeIndex(currentIndex);
        updateDots();
      });
    });

    changeIndex(currentIndex);
    updateDots();

    setInterval(nextSlide, 8000);
  }
  const slider = document.getElementById("cascade-slider");
  cascadeSlider(slider, {
    itemClass: "cascade-slider_item",
    arrowClass: "cascade-slider_arrow",
  });
});

// const cascadeElement = document.getElementById("cascade");
// if (container.querySelectorAll(`.${itemClass}`)) {
//   for (let i = 0; i < itemCount; i++) {
//     const li = document.createElement("li");
//     li.classList.add("cascade-slider_dot");
//     if (i === 0) {
//       li.classList.add("cur"); // Thêm class 'cur' cho phần tử đầu tiên
//     }
//     cascadeElement.appendChild(li); // Thêm phần tử <li> vào phần tử với id 'cascade'
//   }
// }
