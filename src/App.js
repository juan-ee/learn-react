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
        selected:0
    };

    switchNameHandler = (pr) => {
        this.setState({selected: this.state.selected === this.state.persons.length - 1 ? 0 : this.state.selected + 1});
        console.log(`${pr} ${this.state.selected}`);
    };

    nameChangedHandler = (event) => {
        let updatePersons = this.state.persons;
        updatePersons[this.state.selected].name = event.target.value;
        this.setState({persons: updatePersons});
    };
    render() {
        const style = {
            // backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            margin: '10px',
            cursor: 'pointer'
        };
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
                    onClick={()=>this.switchNameHandler('BOTON')}>Switch name</button>
                <Person
                    name={this.state.persons[this.state.selected].name}
                    career={this.state.persons[this.state.selected].career}
                    click={this.switchNameHandler.bind(this,'TEXTO')}
                    change={this.nameChangedHandler}
                />
            </div>
        );
    }
}

export default App;
