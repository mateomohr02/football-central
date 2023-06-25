import React from 'react';

const ContactList = ({contacts, onSelectContact }) => {
    return(
        <div>
            <h2>CONTACTOS</h2>
            <input type="text" placeholder='BUSCA A ALGUIEN'/>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id} onClick={() => onSelectContact(contact.name)}>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;