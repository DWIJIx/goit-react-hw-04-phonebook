import { Component } from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";

const initialContacts = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ]

export class App extends Component {
  
  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts)
      this.setState({ contacts: parsedContacts })
      return;
    }
    this.setState({contacts: initialContacts})
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  addContact = newContact => {
    // console.log(newContact)
    this.setState((prevState) => {
      if (this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        alert(`${newContact.name} is already in contacts`)
      } else 
         return {
        contacts: [...prevState.contacts, newContact]
      }
    })
    // console.log(this.state)
  }
  deleteContact = id => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => (contact.id !== id))
      }
    })
  }
  changeFilter = event => {
    // console.log(event.currentTarget.value)
    // console.log(event.currentTarget.name)
    this.setState({
      filter: event.currentTarget.value
    })
  }
  getVisibleContacts = () => {
    const normalizedContacts = this.state.filter.toLowerCase();
    return (
      this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))
    )
  }
  
  render() {
    const visibleContacts = this.getVisibleContacts()
    
   return (
    <Layout>
      <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
    </Layout>
  );
  }
}
