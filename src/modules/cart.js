import { setToStorage } from "./Storage";
import { localStorageArr, cartCount } from "./store";
import { loadedBooksArr } from "./booksArr";

let currentCartCount = 0;

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

const inTheCart = (storageArr, loadedArr) => {
  for (let i = 0; i < storageArr.length; i++) {
    for (let j = 0; j < loadedArr.length; j++) {
      if (storageArr[i].id === loadedArr[j].id) {
        loadedArr[j].cart = true;
      }
    }
  }
};

export { addToCart, removeFromCart, inTheCart, currentCartCount };
