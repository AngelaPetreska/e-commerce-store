import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = (data) => {
    console.log('User registered:', data);
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
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
    </form>
  );
};

export default SignUp;