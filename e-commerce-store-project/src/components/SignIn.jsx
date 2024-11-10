import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import SignInSignUp from '../assets/SignInSignUp.svg';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = (data) => {
    // replace with backend logic)
    login(data);
    navigate('/home-page');
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 relative">
        <img src={SignInSignUp} alt="Sign In/Sign Up" className="absolute top-0 left-0 w-full h-auto object-cover" />
      </div>
      <div className="flex-1 bg-white items-center">
        <div className='mx-10 my-10 px-8 py-24'>
          <h2 className="mb-4 font-poppins text-4xl font-medium leading-10 tracking-tighter text-left">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm"></label>
              <input type="email" id="email" {...register('email')} placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autocomplete="username" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm"></label>
              <input type="password" id="password" {...register('password')} placeholder="Password" className="mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autocomplete="current-password" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" {...register('rememberMe')} className="mr-2 border-gray-300 rounded-md shadow-sm" />
              <label htmlFor="rememberMe" className="text-sm text-custom-grey">Remember me</label>
              <Link to="/forgot-password" className="text-custom-blue font-semibold ml-auto">Forgot password?</Link>
            </div>
            <button type="submit" className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Sign In</button>
            <p className="text-custom-grey mt-4 text-center">Don't have an account? <Link to="/" className="text-custom-blue font-semibold">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;