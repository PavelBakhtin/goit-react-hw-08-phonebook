import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Typography, Button, Box, Stack } from '@mui/material';

export const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box sx={{ m: 1 }}>
      <Typography variant="h4" sx={{ m: 2 }}>
        Log In
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        direction="column"
        spacing={2}
      >
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
          autoComplete="nope"
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
