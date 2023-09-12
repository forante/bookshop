import { book, bookBlock } from "./book";

let loadedBooks = "";

const books = (items) => {
  items.forEach((item) => {
    book(
      item.id,
      item.img,
      item.authors,
      item.title,
      item.averageRating,
      item.ratingsCount,
      item.description,
      item.price,
      item.cart
    );
    loadedBooks += bookBlock;
  });
};

export { books, loadedBooks };
