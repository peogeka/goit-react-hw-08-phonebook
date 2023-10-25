import { WrapperRoot } from 'components/App.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <WrapperRoot>
      <h1>Login</h1>
      <LoginForm />
    </WrapperRoot>
  );
};
