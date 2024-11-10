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
      <div className="flex-1 bg-white items-center">
        <div className='mx-10 my-10 px-8 py-24'>
          <h2 className="mb-4 font-poppins text-4xl font-medium leading-10 tracking-tighter text-left">Sign Up</h2>
          <p className="text-custom-grey mb-6 font-inter text-base leading-7 text-left">Already have an account? <Link to="/sign-in" className="text-blue-500"><span className='text-custom-blue font-medium font-inter text-base leading-7 text-left'>Sign In</span></Link></p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm"></label>
              <input type="text" id="username" {...register('username')} placeholder="Username" className="text-custom-grey mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autocomplete="username" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm"></label>
              <input type="email" id="email" {...register('email')} placeholder="Email" className="text-custom-grey mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autocomplete="email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm"></label>
              <input type="password" id="password" {...register('password')} placeholder="Password" className="text-custom-grey mt-1 block w-full px-3 py-2 bg-white border-b-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autocomplete="new-password" />
            </div>
            <div>
              <input type="checkbox" id="terms" {...register('terms', { required: true })} className="mr-2 border-gray-300 rounded-md shadow-sm" />
              <label htmlFor="terms" className="text-custom-grey mb-6 font-inter text-base leading-7 text-left">I agree with <span className='text-custom-black font-medium'>Privacy Policy</span> and <span className='text-custom-black font-medium'>Terms of Use</span></label>
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