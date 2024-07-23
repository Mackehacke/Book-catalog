import React from 'react';

/* Nedan är en dynamamisk komponent som hämtar data som styr vad som renderas i komponenten.
 När den tar emot data från parent-komponenten (App) sker det genom props och därför används props som en parameter. */
export default function ResultTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Författare</th>
          <th>Titel</th>
          <th>Första utgivningsår</th>
        </tr>
      </thead>
      <tbody>
        {props.data.slice(0, 30).map((book, index) => {
          // slice(0, 30) gör att böcker på position 0-30 visas i arrayen av böcker. Resten kapas bort. Då visas max 30 böcker i varje sökning.
          return (
            <tr key={index} onClick={() => props.displayBook(index)}>
              {/* onClick i raden ovan lägger till en klickhanterare och gör så att när det klickas på tr anropas funktionen displayBook som finns i App.js.
              Den är gjord som en funktionsdeklaration som är anonym från början. */}
              <td>{book.author_name ? book.author_name[0] : ''}</td>
              {/* Enbart författaren som står på första positionen i arrayen av författare visas.
              Saknas det en författare finns en null check som gör att en tom sträng returneras istället för att det ska bli fel. */}
              <td>{book.title}</td>
              <td>{book.first_publish_year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/* .map tar olika arrayelement och tranformerar dem till något annat. Den tar data av något slag och omvandlar det till JSX-kod med data i. 
Arbetar element för element. Arbetar med ett objekt åt gången i arrayen (book), alltså en bok i taget. */
