import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/backend/auth/signup',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }
    );
    const data = await res.json();
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
          <button
            type="submit"
            className="w-full rounded bg-[#007bff] py-2.5 font-semibold text-white transition hover:bg-[#0056b3]"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Have an account?{' '}
          <Link to="/signin" className="font-semibold text-[#007bff] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}