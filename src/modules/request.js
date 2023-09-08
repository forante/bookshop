import { booksArr } from "./booksArr";

const request = async (category, startIndex, endIndex) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=%22subject:${category}%22&key=AIzaSyC3riYNFOWzXLn6UuIBWevbyY5QtmOsrIo&printType=books&startIndex=0&maxResults=6&langRestrict=en`
  );
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   // console.log(data.items.volumeInfo.imageLinks.thumbnail);
  //   // console.log(data.items[0].volumeInfo.authors);
  //   // console.log(data.items[0].volumeInfo.title);
  //   // console.log(data.items[0].volumeInfo.averageRating);
  //   // console.log(data.items[0].volumeInfo.ratingsCount);
  //   // console.log(data.items[0].volumeInfo.description);
  //   // console.log(data.items[0].saleInfo.retailPrice);
  //   // console.log(data);
  //   dataArr = data.items;
  //   booksArr(dataArr);
  // });

  const data = await res.json();
  booksArr(data.items);
};

export { request };
