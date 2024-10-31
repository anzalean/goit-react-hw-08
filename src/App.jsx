import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
      </Route>
    </Routes>
  );
}

export default App;
