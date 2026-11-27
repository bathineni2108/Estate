import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth.jsx';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setError(null);

    const res = await fetch('/backend/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok || data.success === false) {
      setError(data.message || data.error || 'Signup failed');
      setLoading(false);
      return;
    }

    setLoading(false);
    setError(null);
    navigate('/signin');
  } catch (error) {
    setError(error.message || 'Something went wrong');
    setLoading(false);
  }
  };  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
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
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Have an account?{' '}
          <Link to="/signin" className="font-semibold text-[#007bff] hover:underline">
            Sign in
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