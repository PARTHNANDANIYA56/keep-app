import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function Createnotes({ passNote }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = (event) => {
        event.preventDefault();
        if (!title || !description) return;
        const newNote = { title, description, content: description };
        passNote(newNote);
        setTitle('');
        setDescription('');
    };

    return (
        <div className='main_note'>
            <form>
                <input
                    className='mt-4'
                    type='text'
                    placeholder='Enter Your Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    className='mt-2 p-1 text-center'
                    rows={5}
                    placeholder='Enter Your Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button onClick={submit} className='btn btn-dark'>
                    <FaPlusCircle /> Add Note
                </button>
            </form>
        </div>
    );
}

export default Createnotes;
