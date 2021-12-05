import React from "react";
import "./style.css";
import { useState } from "react";
var books = {
  JavaScript: [
    {
      name: "Javascript The Good Parts",
      rating: "4/5"
    },
    {
      name: "Clean Code in JavaScript ",
      rating: "5/5"
    }
  ],

  fiction: [
    {
      name: "The Girl Who Drank the Moon ",
      rating: "5/5"
    },
    {
      name: "Ghosts of The Silent Hills: Stories based on true hauntings",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Before You Start Up",
      rating: "4/5"
    },
    {
      name: "The Tatas",
      rating: "5/5"
    }
  ]
};
var BooksWehave = Object.keys(books);

export default function App() {
  var [generSelect, setGener] = useState("business");
  function genreClickHandler(book) {
    setGener(book);
  }

  return (
    <div className="App">
      <h1>📚 goodBooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {BooksWehave.map(function (book) {
          return (
            <button onClick={() => genreClickHandler(book)}>{book}</button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}></div>
      <ul>
        {books[generSelect].map(function (bookName) {
          return (
            <li>
              <div>{bookName.name}</div>
              <div>{bookName.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
