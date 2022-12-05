import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
export const NavGuest = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          navigate('/register');
        }}
      >
        Register
      </Button>
      <Button
        type="button"
        onClick={() => {
          navigate('/login');
        }}
      >
        Log In
      </Button>
    </>
  );
};
