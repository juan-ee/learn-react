import React from 'react';
import './Person.css';

const Person = (args) => {
    return (
        <div className="Person">
            <p onClick={args.click}>Hello, my name is <strong>{args.name}</strong> and I'm <strong>{args.career}</strong></p>
            <small>{args.children}</small>
            <input type="text" onChange={args.change} value={args.name}/>
        </div>
    );

};

export default Person;