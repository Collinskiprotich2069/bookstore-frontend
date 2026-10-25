import BookList from "../api/BookList";

function Home() {
  return (
    <>
      <div className="book-container">
        <BookList />
      </div>
    </>
  );
}

export default Home;
