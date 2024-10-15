// import { useState, useEffect } from 'react'
// import initialContacts from './assets/contacts.json'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const App = () => {

  // const [contacts, setContacts] = useState(() => {
  //   const contactList = JSON.parse(window.localStorage.getItem("contacts"));
  //   return contactList?.length ? contactList : initialContacts
  // });

  // const [filter, setFilter] = useState("");

  //  useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  
//   const handleAdding = (newContact) => {
//     setContacts((prev) => [...prev, newContact])
    
//   };
//   const deleteContact = (contactId) => {
//     setContacts(prevContacts => {
//       return prevContacts.filter((contact) => contact.id !== contactId);
//   })
// }

//   const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div>
      <h1>Phonebook</h1>
      
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App
