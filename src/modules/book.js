let bookBlock = "";

const book = (img, author, title, description, price) => {
  if (img) {
    img = img.thumbnail;
  } else {
    img =
      "http://books.google.com/books/content?id=R-qkwPz5T…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
  }

  if (author) {
    author = author.join();
  }

  if (description) {
    if (description.length > 90) {
      description = description.slice(0, 90);
      description += "...";
    }
  }

  if (price) {
    price = `${price.currencyCode} ${price.amount}`;
  } else {
    price = " ";
  }

  bookBlock = `<div class="book">
  <div class="book__img">
    <img src=${img} alt="">
  </div>
  <div class="book__info">
    <div class="book__autor">${author}</div>
    <h3 class="book__title">${title}</h3>
    <div class="book__rating">252</div>
    <p class="book__subtitle">${description}</p>
    <div class="book__price">${price}</div>
    <button class="book__button">buy now</button>
  </div>
</div>`;
};

export { book, bookBlock };
