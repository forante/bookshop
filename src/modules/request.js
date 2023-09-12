import { booksArr } from "./booksArr";

const request = async (category, startIndex = 0) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=%22subject:${category}%22&key=AIzaSyC3riYNFOWzXLn6UuIBWevbyY5QtmOsrIo&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
  );
  const data = await res.json();
  booksArr(data.items);
};

export { request };
