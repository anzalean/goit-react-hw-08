import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default AuthNav;
