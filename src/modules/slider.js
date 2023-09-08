let slider = () => {
  const imagesArr = document.querySelectorAll(".slider__img");
  const numArr = document.querySelectorAll(".slider__nav-num");

  let count = 0;

  numArr.forEach((item, index) => {
    item.addEventListener("click", () => {
      count = index;
      changeSlide();
    });
  });

  function changeSlide() {
    addActiveClass(imagesArr);
    addActiveClass(numArr);
  }

  function addActiveClass(arr) {
    for (let elem of arr) {
      elem.classList.remove("active");
    }
    arr[count].classList.add("active");
  }

  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      count++;
      if (count > numArr.length - 1) count = 0;
      changeSlide();
    }, 5000);
  });
};

export { slider };
