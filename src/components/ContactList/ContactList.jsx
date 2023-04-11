import PropTypes from 'prop-types'
import {List} from './ContactList.styled'
import { ContactListItem } from "./ContactListItem"

export const ContactList = ({contacts, onDelete}) => {
    return (
        <section>
            <List>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <ContactListItem contact={contact} onDelete={onDelete} />
                        </li>
                    )
                })}
            </List>
        </section>
        
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    onDelete: PropTypes.func.isRequired
}