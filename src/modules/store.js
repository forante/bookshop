import { request } from "./request";
import { CATEGORIES } from "./const";
import { loadedBooks } from "./books";
import { storeBooksArr, loadedBooksArr } from "./booksArr";

const categories = document.querySelectorAll(".categories__item");
const booksBlock = document.querySelector(".books");
const loadMoreBtn = document.querySelector(".book__load");
const cartCount = document.querySelector(".iconsbar__cart-count");

let startIndex = 0,
  currentIndex = 0,
  currentCartCount = 0,
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
    console.log(parentNode.dataset.id);
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

const addToCart = (buyNowBtn, parentNode) => {
  buyNowBtn.classList.add("book__button-cart");
  buyNowBtn.innerText = "in the cart";
  cartCount.classList.add("active");
  currentCartCount++;
  cartCount.innerText = currentCartCount;
  loadedBooksArr.forEach((item) => {
    if (parentNode.dataset.id === item.id) {
      localStorageArr.push(item);
    }
  });
  setToStorage(localStorageArr);
};
const removeFromCart = (buyNowBtn, parentNode) => {
  buyNowBtn.classList.remove("book__button-cart");
  buyNowBtn.innerText = "buy now";
  currentCartCount--;
  cartCount.innerText = currentCartCount;
  if (currentCartCount === 0) cartCount.classList.remove("active");
  localStorageArr = localStorageArr.filter(
    (item) => parentNode.dataset.id !== item.id
  );
  setToStorage(localStorageArr);
};

const setToStorage = (arr) => {
  localStorage.setItem("books", JSON.stringify(arr));
};

const getFromStorage = () => {};

async function store(index = 0) {
  await request(CATEGORIES[index]);
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
}

export { store, localStorageArr, currentCartCount,cartCount };
