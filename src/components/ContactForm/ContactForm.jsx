import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { TextField, Button, Stack } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
    form.reset();
  };
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction="column"
      spacing={1}
    >
      <TextField
        label="Name"
        variant="outlined"
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
      <TextField
        label="Number"
        variant="outlined"
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" type="submit" sx={{ mt: 1, mb: 1 }}>
          Add contact
        </Button>
      </div>
    </Stack>
  );
};
