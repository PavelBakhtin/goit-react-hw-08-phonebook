import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
export const NavUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const { user } = useAuth();
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          navigate('/contacts');
        }}
      >
        Contacts
      </Button>
      <div>
        <Typography component="span">Hello, {user.name}</Typography>

        <Button type="button" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
};
