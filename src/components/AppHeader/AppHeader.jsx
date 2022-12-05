import { NavGuest } from 'components/Navigation/NavGuest/NavGuest';
import { NavUser } from 'components/Navigation/NavUser/NavUser';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button, AppBar } from '@mui/material';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
        {isLoggedIn ? <NavUser></NavUser> : <NavGuest></NavGuest>}
      </AppBar>
    </header>
  );
};
