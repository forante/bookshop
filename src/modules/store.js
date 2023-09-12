import { request } from "./request";
import { CATEGORIES } from "./const";
import { loadedBooks } from "./books";
import { storeBooksArr, loadedBooksArr } from "./booksArr";
import { addToCart, removeFromCart, currentCartCount } from "./cart";

const categories = document.querySelectorAll(".categories__item");
const booksBlock = document.querySelector(".books");
const loadMoreBtn = document.querySelector(".book__load");
const cartCount = document.querySelector(".iconsbar__cart-count");

let startIndex = 0,
  currentIndex = 0,
  localStorageArr = [];

categories.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectCategory(index);
    currentIndex = index;
  });
});

booksBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("book__button")) {
    const parentNode = e.target.parentNode.parentNode;
    const buyNowBtn = parentNode.querySelector(".book__button");
    if (buyNowBtn.classList.contains("book__button-cart")) {
      removeFromCart(buyNowBtn, parentNode);
    } else {
      addToCart(buyNowBtn, parentNode);
    }
  }
});

loadMoreBtn.addEventListener("click", async () => {
  startIndex += 6;
  loadedBooks = "";
  storeBooksArr = "";
  await request(CATEGORIES[currentIndex], startIndex);
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
});

const selectCategory = async (index) => {
  loadedBooks = "";
  storeBooksArr = [];
  loadedBooksArr = [];
  await request(CATEGORIES[index]);
  categories.forEach((item) => {
    item.classList.remove("active");
  });
  categories[index].classList.add("active");
  booksBlock.innerHTML = "";
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
  storeBooksArr = [];
  startIndex = 0;
};

async function store(index = 0) {
  await request(CATEGORIES[index]);
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
}

export { store, localStorageArr, currentCartCount, cartCount };
