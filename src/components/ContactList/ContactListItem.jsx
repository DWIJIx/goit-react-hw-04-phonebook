import PropTypes from 'prop-types'
import {ContactItem, DelButton, ContactValue} from './ContactList.styled'

export const ContactListItem = ({contact, onDelete}) => {
    return (
        <ContactItem>
            <ContactValue>{contact.name}: {contact.number}</ContactValue>
            
            <DelButton
                onClick={() => onDelete(contact.id)}
            >
                 Delete
            </DelButton>
        </ContactItem>
        
        
    )
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired
}
