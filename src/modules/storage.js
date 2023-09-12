import { loadedBooksArr } from "./booksArr";
import { currentCartCount, inTheCart } from "./cart";
import { cartCount, localStorageArr } from "./store";

const setToStorage = (arr) => {
  localStorage.setItem("books", JSON.stringify(arr));
};

const getFromStorage = () => {
  const array = JSON.parse(localStorage.getItem("books"));
  if (array.length) {
    currentCartCount = array.length;
    cartCount.classList.add("active");
    cartCount.innerText = currentCartCount;
    localStorageArr = array;
    localStorage.clear();
    inTheCart(localStorageArr, loadedBooksArr);
  }
};

export { setToStorage, getFromStorage };
