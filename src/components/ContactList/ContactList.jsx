import Contact from '../Contact/Contact'
import s from "./ContactList.module.css"
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contacts/selectors'

const ContactList = () => {

  const filteredData = useSelector(selectFilteredContacts)
  return (
    <div>
      <ul className={s.list}>{filteredData.map((contact) => {
        return <li key={contact.id}>
          <Contact data={contact}></Contact>
        </li>
      })}</ul>
  </div>
  )
}

export default ContactList