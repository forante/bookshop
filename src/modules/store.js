import { request } from "./request";
import { CATEGORIES } from "./const";
import { loadedBooks } from "./books";

const categories = document.querySelectorAll(".categories__item");
const booksBlock = document.querySelector(".books");

categories.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectCategory(index);
  });
});

const selectCategory = async (index) => {
  loadedBooks = "";
  await request(CATEGORIES[index]);
  booksBlock.innerHTML = "";
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
  // console.log(booksBlock);
};

async function store(index = 0) {
  await request(CATEGORIES[index]);
  booksBlock.innerHTML = "";
  booksBlock.innerHTML = booksBlock.innerHTML + loadedBooks;
  // booksBlock.insertAdjacentHTML("afterend", loadedBooks);
  // console.log(booksBlock);
}

export { store };
