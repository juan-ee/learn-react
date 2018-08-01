import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    state = {
        persons: [
            {name:'Juan',career:'engineer'},
            {name:'Asd2',career:'doctor'},
            {name:'Asd1',career:'nurse'}
        ],
        showPersons: false,
        selected:0
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    nameChangedHandler = (index,event) => {
        let updatePersons = this.state.persons;
        updatePersons[index].name = event.target.value;
        this.setState({persons: updatePersons});
    };
    render() {
        let persons = null;
        const style = {
            // backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            margin: '10px',
            cursor: 'pointer'
        };
        if(this.state.showPersons){
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        career={this.state.persons[0].career}
                        change={this.nameChangedHandler.bind(this,0)}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        career={this.state.persons[1].career}
                        change={this.nameChangedHandler.bind(this,1)}
                    />
                    <Person
                        name={this.state.persons[2].name}
                        career={this.state.persons[2].career}
                        change={this.nameChangedHandler.bind(this,2)}
                    />
                </div>
            );
        }
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Hey, Oh ! let's go !</h1>
                </header>
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
