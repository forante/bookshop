let bookBlock = "",
  classRating = "",
  classDescription = "",
  classCart = "";

const book = (
  id,
  img,
  author,
  title,
  averageRating,
  ratingsCount,
  description,
  price,
  cart
) => {
  if (img) {
    img = img.thumbnail;
  } else {
    img =
      "http://books.google.com/books/content?id=R-qkwPz5T…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
  }

  if (author) {
    author = author.join();
  }

  if (averageRating && ratingsCount) {
    console.log(ratingsCount);
    classRating = "";
  } else {
    classRating = "none";
  }

  if (description) {
    classDescription = "";
    if (description.length > 90) {
      description = description.slice(0, 90);
      description += "...";
    }
  } else {
    classDescription = "none";
  }

  if (price) {
    price = `${price.currencyCode} ${price.amount}`;
  } else {
    price = "";
  }

  if (cart === true) {
    classCart = "book__button-cart";
  } else classCart = "";

  bookBlock = `<div class="book" data-id=${id}>
  <div class="book__img">
    <img src=${img} alt="">
  </div>
  <div class="book__info">
    <div class="book__autor">${author}</div>
    <h3 class="book__title">${title}</h3>
    <div class="book__rating ${classRating}">
      <div class="book__rating-stars">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
        </svg>
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
        </svg>
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
        </svg>
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
        </svg>
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
        </svg>
      </div> 
      <div class="book__rating-number">${ratingsCount} review</div> 
    </div>
    <p class="book__subtitle ${classDescription}">${description}</p>
    <div class="book__price">${price}</div>
    <button class="book__button btn ${classCart}">buy now</button>
  </div>
</div>`;
};

export { book, bookBlock };
