import React, { useState } from 'react';
import Header from './Componet/Header';
import './App.css';
import Createnotes from './Componet/Createnotes';
import Footer from './Componet/Footer';
import Notes from './Componet/Notes';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (newNote) => {
    setAddItem((prevData) => {
      return [...prevData, newNote];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currdata, index) => {
        return index !== id;
      })
    });
  };
  return (
    <>
      <Header />
      <Createnotes passNote={addNote} />
      {addItem.map((val, index) => (
        <Notes
          key={index}
          id={index}
          title={val.title}
          description={val.description}
          content={val.content}
          deleteItem={onDelete}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
