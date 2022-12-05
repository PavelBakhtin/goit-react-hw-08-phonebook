import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
// import { StyledInput } from '../ContactForm/ContactsForm.styled';
import { TextField } from '@mui/material';
export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <TextField
        label="Find contacts by name"
        variant="standard"
        name="filter"
        onChange={onFilter}
      />
    </>
  );
};
