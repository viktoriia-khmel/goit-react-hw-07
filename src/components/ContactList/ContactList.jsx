import Contact from "../Contact/Contact"
import s from './ContactList.module.css'
import { useSelector } from "react-redux"

const ContactList = () => {

const contacts = useSelector((state) => state.contacts.items);
const filter = useSelector((state) => state.filters.name.toLowerCase());
const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.wrapper}>
          {filteredContacts.map((item) => (
              <li key={item.id} {...item}>
                  {<Contact id={item.id} name={item.name} number={item.number} /> }
              </li>
          ))}
    </ul>
  )
}

export default ContactList
