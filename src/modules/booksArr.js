import { books } from "./books";

let bookInfoArr = [];
let storeBooksArr = [];

const booksArr = (items) => {
  items.forEach((item) => {
    bookInfoArr = {
      img: item.volumeInfo.imageLinks,
      authors: item.volumeInfo.authors,
      title: item.volumeInfo.title,
      description: item.volumeInfo.description,
      price: item.saleInfo.retailPrice,
    };
    storeBooksArr = [...storeBooksArr, bookInfoArr];
  });
  books(storeBooksArr);
  storeBooksArr = "";
};

export { booksArr, storeBooksArr };
