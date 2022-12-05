import React from 'react';
// import { StyledContactsList, StyledContactsLi } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
          <ListItem alignItems="flex-start" key={id}>
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
