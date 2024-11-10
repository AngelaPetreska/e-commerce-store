import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = (data) => {
    // Simulate authentication (replace with actual backend logic)
    login(data);
    navigate('/home-page');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register('username')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register('password')} />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
