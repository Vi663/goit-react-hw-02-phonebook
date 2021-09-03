import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class ContactForm extends Component {
  
  state = {
    id: '',
    name: '',
    number: '',
    contacts: [],
  }

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: uuidv4(),
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({ id: '', name: '', number: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name </label>
        <input type="text" name="name" value={this.state.name} id={this.nameInputId}
          onChange={this.handleChange}/>
        
        <label htmlFor={this.numberInputId}> Phone number </label>
        <input type="text" name="number" value={this.state.number} id={this.numberInputId}
          onChange={this.handleChange} />
        <button type="submit" name="submit">Add Contact</button>
      </form>
      
    )
  }
}