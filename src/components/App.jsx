import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/register/Register';
import { Login } from 'pages/Login/Login';
import { HomePage } from 'pages/HomePage/HomePage';
import { AppHeader } from './AppHeader/AppHeader';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Container } from '@mui/material';
export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Container maxWidth="sm">
        <AppHeader></AppHeader>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
        </Routes>
      </Container>
    )
  );
};
