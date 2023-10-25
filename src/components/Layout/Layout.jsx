import { Outlet } from 'react-router-dom';
import { Header, HeaderMenu, StyledLink } from './Layout.styled';
import { UserBlock } from 'components/UserBlock/UserBlock';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Header>
        <HeaderMenu>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {isLogged && <StyledLink to="/contacts">contacts</StyledLink>}
          {!isLogged && <StyledLink to="/register">register</StyledLink>}
          {!isLogged && <StyledLink to="/login">login</StyledLink>}
        </HeaderMenu>
        {isLogged && <UserBlock />}
      </Header>
      <Outlet />
      <ToastContainer />
    </div>
  );
};
