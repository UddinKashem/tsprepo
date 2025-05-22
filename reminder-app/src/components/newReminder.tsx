import React, { useState } from 'react';
import { JSX } from 'react/jsx-runtime';

function newReminder(): JSX.Element {
    //const [title, setTitle] = useState('');
    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(title);
    }

    return (
        <form onSubmit={submitForm}>
           <label htmlFor="title"></label>
           <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control" />
           <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>    
        </form>
    );
}

export default newReminder;