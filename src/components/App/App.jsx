// import './App.css';
import React, { Component } from 'react';
import { MainContainer } from "../MainContainer/MainContainer";
import { ContactForm } from "../ContactForm/ContactForm";
// import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";

export class App extends Component {
  
  state = {
    contacts: [],
  }

  formSubmitHendler = data => {
    const newContact = { id: data.id, name: data.name, number: data.number };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
    console.log(this.state)
  }

  render() {
    const newContact = this.state.contacts;
    return (
      <MainContainer>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHendler}/>

          <h2>Contacts</h2>
          {/* <Filter /> */}
          <ContactList contacts={newContact}/>
        </div>
      </MainContainer>
    );
  }
  
}
