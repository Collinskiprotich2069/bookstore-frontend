import { useState, useEffect } from "react";

function BookList() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <>
      <div className="book-list"></div>
      <p>There should be books down here man</p>
      {books.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        books.map((book) => (
          <li key={book.id}>
            <ul><p>{book.title}</p></ul>
            <img
              src={book.image_cover}
              style={{
                height: "100px",
                width: "100px",
              }}
              alt="book image cover"
            />
            <a href={book.file}>View</a>
          </li>
        ))
      )}
    </>
  );
}

export default BookList;
