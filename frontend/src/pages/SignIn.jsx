import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signinStart, signinSuccess, signinFailure} from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const {loading, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    dispatch(signinStart());
    const res = await fetch('/backend/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok || data.success === false) {
      dispatch(signinFailure(data.message || 'Sign in failed'));
      return;
    }

    dispatch(signinSuccess(data));
    navigate('/');
  } catch (error) {
    dispatch(signinFailure(error.message || 'Something went wrong'));
  }
  };  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign IN
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
          <button disabled={loading}
            type="submit"
            className="w-full rounded bg-[#007bff] py-2.5 font-semibold text-white transition hover:bg-[#0056b3]"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <OAuth />
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?{' '}
          <Link to="/signup" className="font-semibold text-[#007bff] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      {error && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounde  px-4 py-2 text-red-700 bg-red-100 border border-red-400">
          {error}
        </div>
      )}
    </div>
  );
};