import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

import './App.css';

class App extends Component {
  constructor(){
    // super calls constructor on component class giving us access to state
    super();
    // State
    this.state = {
      contacts: [],
      search: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ contacts: users }));
  }

  // 'this' automatically binds with arrow functions through lexicol scoping
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  render(){
    const { contacts, search } = this.state; 
    // checks contacts array to match with search query
    // 'toLowerCase' makes search not case sensitive
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(search.toLowerCase())
      )
    return(
      <div className='App'>
        <h1>  Rolodex </h1>
        <Search
          placeholder='Search contacts...'
          handleChange={this.handleChange}
        />
        <CardList contacts={filteredContacts}/>
      </div>
    );
  }
}

export default App;