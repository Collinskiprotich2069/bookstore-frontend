import BookList from "../api/BookList";
import "../styles/Home.css";

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
