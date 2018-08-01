import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'asde', name:'Juan',career:'engineer'},
            {id: 'dwer', name:'Asd2',career:'doctor'},
            {id: 'g34g', name:'Asd1',career:'nurse'}
        ],
        showPersons: false,
        selected:0
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    nameChangedHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex(p=>p.id===id);
        const updatedPersons = this.state.persons.slice();
        updatedPersons[personIndex].name = event.target.value;
        this.setState({persons: updatedPersons});
    };

    deletePersonHandler = (index) => {
        let updatePersons = [...this.state.persons];
        updatePersons.splice(index,1);
        this.setState({persons: updatePersons});
    };

    render() {
        let persons = null;
        const style = {
            color: 'white',
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            margin: '10px',
            cursor: 'pointer'
        };
        if(this.state.showPersons){
            style.backgroundColor = 'red';
            persons = (
                <div>
                    {this.state.persons.map((person,index)=>(
                        <Person
                            key={person.id}
                            name={person.name}
                            career={person.career}
                            change={(event)=>this.nameChangedHandler(event,person.id)}
                            delete={this.deletePersonHandler.bind(this,index)}
                        />
                    ))}
                </div>
            );
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Hey, Oh ! let's go !</h1>
                </header>
                <p className={classes.join(' ')}>This is really working</p>
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    {!this.state.showPersons ? "Show persons" : "Hide Persons"}
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
