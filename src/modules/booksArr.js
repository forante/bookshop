import { books } from "./books";
import { localStorageArr, currentCartCount, cartCount } from "./store";

let bookInfoArr = [];
let storeBooksArr = [];
let loadedBooksArr = [];

const booksArr = (items) => {
  items.forEach((item) => {
    bookInfoArr = {
      id: item.id,
      img: item.volumeInfo.imageLinks,
      authors: item.volumeInfo.authors,
      title: item.volumeInfo.title,
      averageRating: item.volumeInfo.averageRating,
      ratingsCount: item.volumeInfo.ratingsCount,
      description: item.volumeInfo.description,
      price: item.saleInfo.retailPrice,
      cart: false,
    };
    storeBooksArr = [...storeBooksArr, bookInfoArr];
    loadedBooksArr = [...loadedBooksArr, bookInfoArr];
  });

  const array = JSON.parse(localStorage.getItem("books"));
  if (array) {
    currentCartCount = array.length;
    console.log(currentCartCount);
    cartCount.classList.add("active");
    cartCount.innerText = currentCartCount;
    localStorageArr = array;
    localStorage.clear();
    for (let i = 0; i < localStorageArr.length; i++) {
      for (let j = 0; j < loadedBooksArr.length; j++) {
        if (localStorageArr[i].id === loadedBooksArr[j].id) {
          loadedBooksArr[j].cart = true;
        }
      }
    }
    //  localStorage.clear();
  }

  books(storeBooksArr);
};

export { booksArr, storeBooksArr, loadedBooksArr };
