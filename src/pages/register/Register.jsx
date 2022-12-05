import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Typography, Button, Box, Stack } from '@mui/material';
export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box sx={{ m: 1 }}>
      <Typography variant="h4" sx={{ m: 2 }}>
        Register
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        direction="column"
        spacing={2}
      >
        <TextField
          variant="outlined"
          label="Name"
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          required
        />
        <TextField
          variant="outlined"
          label="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="off"
          required
        />
        <TextField
          variant="outlined"
          label="Password"
          id="password"
          type="password"
          name="password"
          autoComplete="off"
          required
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </Stack>
    </Box>
  );
};
