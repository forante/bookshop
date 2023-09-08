import { book, bookBlock } from "./book";

let loadedBooks = "";

const books = (items) => {
  items.forEach((item) => {
    book(item.img, item.authors, item.title, item.description, item.price);
    loadedBooks += bookBlock;
  });
};

export { books, loadedBooks };
