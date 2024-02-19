import React from 'react';
import { MdDelete } from 'react-icons/md';

function Notes(props) {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <div className='note'>
            <h1>Title: {props.title}</h1>
            <br />
            <p><b>Description</b>{props.description}</p>
            <button onClick={deleteNote} className='btn btn-dark'><MdDelete /></button>
        </div>
    );
}

export default Notes;
