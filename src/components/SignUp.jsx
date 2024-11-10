import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import SignInSignUp from '../assets/SignInSignUp.svg';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const onSubmit = (data) => {
    console.log('User registered:', data);
    login(data);
    navigate('/home-page');
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 relative">
        <img src={SignInSignUp} alt="Sign In/Sign Up" className="absolute top-0 left-0 w-full h-auto object-cover" />
      </div>
      <div className="flex-1 bg-white items-center px-8 py-12">
        <div className="mx-auto w-full px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-medium text-left mb-6">Sign Up</h2>
          <p className="text-gray-500 text-left mb-6">Already have an account? <Link to="/sign-in" className="text-custom-blue font-medium">Sign In</Link></p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="text"
                id="username"
                {...register('username')}
                placeholder="Username"
                className="mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input
                type="password"
                id="password"
                {...register('password')}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                autoComplete="new-password"
              />
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                {...register('terms', { required: true })}
                className="mr-2 border border-gray-300 rounded-md shadow-sm"
              />
              <label htmlFor="terms" className="text-normal text-gray-700">
                I agree to the <a href="#" className="text-custom-black font-medium">Privacy Policy</a> and <a href="#" className="text-custom-black font-medium">Terms of Use</a>
              </label>
              {errors.terms && <p className="text-red-500 text-sm">Please agree to the terms and conditions.</p>}
            </div>
            <button type="submit" className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;