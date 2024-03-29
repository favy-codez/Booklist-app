import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/81nJUluy7cL._AC_UY218_.jpg"
      alt="Purple Hibiscus"
    />
  );
};

const Title = () => {
  return <h2>Purple Hibiscus</h2>;
};

const Author = () => {
  return <h2>Chimamanda Ngozi Adichie </h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
