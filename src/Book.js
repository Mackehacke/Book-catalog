import React from 'react';

export default function Book(props) {
  if (!props.book) {
    return <div></div>;
  } else {
    return (
      <div className="selectedBook">
        <h2>{props.book.title}</h2>
        <div>
          <span>Författare: </span>
          {props.book.author_name ? props.book.author_name.join(', ') : ''}
        </div>
        <div>
          <span>Förlag: </span>
          {props.book.publisher ? props.book.publisher.join(', ') : ''}
        </div>
        <div>
          <span>Språk: </span>
          {props.book.language ? props.book.language.join(', ') : ''}
        </div>
        <div>
          <span>Ämnen: </span>
          {props.book.subject ? props.book.subject.join(', ') : ''}
          {/* .join(', ') i raderna ovan lägger till kommatecken och mellanslag mellan varje föremål i arrayen så att de inte sitter ihop.
          Det finns också en null check som innebär att ifall det exempelvis inte finns något ämne eller bara
          ett ämne ska det inte bli fel utan en tom sträng ska returneras. */}
        </div>
      </div>
    );
  }
}

/* if (!props.book) som omringar koden är en null-check och används eftersom komponenten kan vara kopplad till en variabel som stundtals är null.
    Finns det inte någon data att visa ska det inte bli fel som det annars kan bli. Det här innebär att om det inte finns något objekt kopplat 
    till props.book kommer det inte bli fel utan det kommer returneras ett tomt div-element istället. */
