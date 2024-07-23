import React, { useState } from 'react';
import ResultTable from './ResultTable';
import Book from './Book';
import './style.css';

export default function App() {
  /* State-variableln som används för att hämta API:et och modifera datan i den.
  Ursprungsläget är en tom array. */
  const [books, setBooks] = useState([]);
  //State-variabeln nedan är kopplad till search- samt changeText-funktionen.
  const [query, setQuery] = useState('');
  const [activeBook, setActiveBook] = useState(null);
  /* useState(null) ovan har null från början eftersom ingen bok är vald från början. Det finns inget att ge child-komponenten från början.
  Det ersätts av ett bokobjekt när en bok blivit vald. */

  /* Funktionen nedan är kopplad till knappen. 
  När knappen klickas på anropas funktionen som innehåller länken till API:et och fetch som hämtar API:et. */
  function search() {
    let uri = `https://openlibrary.org/search.json?title=${query}`;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs));
  }

  /* Med funktionen nedan hämtas värdet av det som skrivs in i sökfältet och kopplas till funkionen search där query finns. 
  Den blir också kopplad till knappen. Det här är en händelsehanterare. */
  function changeText(event) {
    setQuery(event.target.value);
  }

  /* Funktionen nedan gör det möjligt för variabeln att få innehåll när användaren klickar på en av böckerna i tabellen. */
  function displayBook(index) {
    setActiveBook(books[index]);
  }
  /* Funktionen använder index som argument vilket gör att den tar positionen för boken i arrayen för att välja ut det objektet. */

  return (
    <div className="wrapper">
      <h1>Bokkatalog</h1>
      <p>
        Här på denna sida kan du söka fram information om böcker genom att söka
        i sökfältet. <br /> Vill du få mer detaljerad information om en viss bok
        kan du klicka på den i tabellen.
      </p>
      <div className="searchField">
        <label htmlFor="text">Bokkatalog sökmotor</label>
        <input
          type="text"
          placeholder="Sök..."
          value={query}
          onChange={changeText}
        />
        <button onClick={search}>Visa böcker</button>
        {/* När knappen klickas på anropas funktionen search. */}
      </div>
      <Book book={activeBook} />
      {/* Funktionen Book i Book.js blir kopplad med funktionen app. Book blir även kopplad till activeBook. */}
      <ResultTable data={books} displayBook={displayBook} />
      {/* Funktionen ResultTable i ResultTable.js blir kopplad med funktionen app. ResultTable blir även kopplad till displayBook. */}
    </div>
  );
}
