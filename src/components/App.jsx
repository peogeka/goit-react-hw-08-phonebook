import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Layout } from './Layout/Layout';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Logup } from 'pages/Logup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Logup />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
