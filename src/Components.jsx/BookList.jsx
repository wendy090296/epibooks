import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return books.map((book, i) => <SingleBook key={i} book={book} />);
};

export default BookList;
