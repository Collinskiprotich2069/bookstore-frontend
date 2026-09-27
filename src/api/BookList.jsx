import { useState, useEffect } from "react";

function BookList() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data)
      });
  
    
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
            <ul>{book.title}</ul>
            <img src={book.image} alt="book image cover" />
            <iframe src={book.file}>{book.file}</iframe>
          </li>
        ))
      )}
    </>
  );
}

export default BookList;
