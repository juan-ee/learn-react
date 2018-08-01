import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
      '@media (min-width: 500px)': {
          width: '450px'
      }
    };
    return (
        <div className="Person" style={style}>
            <button className={"danger"} onClick={props.delete}>Remove</button>
            <p onClick={props.click}>Hello, my name is <strong>{props.name}</strong> and I'm <strong>{props.career}</strong></p>
            <small>{props.children}</small>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );

};

export default Radium(Person);