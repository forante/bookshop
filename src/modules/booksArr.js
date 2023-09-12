import { books } from "./books";
import { localStorageArr } from "./store";
import { inTheCart } from "./cart";
import { getFromStorage, setToStorage } from "./Storage";

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
  getFromStorage();
  setToStorage(localStorageArr);
  inTheCart(localStorageArr, loadedBooksArr);

  books(storeBooksArr);
};

export { booksArr, storeBooksArr, loadedBooksArr };
