import React from 'react';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, List, ListItem, ListItemText } from '@mui/material/';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const onFilter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizedFilter = onFilter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <List>
      {contacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ListItem
            component="li"
            alignItems="flex-start"
            key={id}
            sx={{ borderBottom: 'solid 1px grey', marginBottom: '5px' }}
          >
            <ListItemText>{name}: </ListItemText>
            <ListItemText>{number}</ListItemText>
            <Button
              variant="contained"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
    </List>
  );
};
