import React from 'react'
import {useSelector} from 'react-redux';
import {useRef} from 'react';

export default function Profile() {
  const user = useSelector((state) => state.user.currentuser?.others);
  const profilePictureRef = useRef(null);
  const handleSubmit = (e) => {};
  return (
     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" name="profilePicture" accept="image/*" ref={profilePictureRef} hidden></input>
          <img onClick={() => profilePictureRef.current?.click()} src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            // value={formData.username}
            // onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
            required
          />
          <button 
            type="submit"
            className="w-full rounded bg-[#007bff] py-2.5 font-semibold text-white transition hover:bg-[#0056b3]"
          >
            Update Profile
          </button>
        </form>
       <div className="mt-4 flex justify-between text-sm text-red-600">
        <span className="hover:underline cursor-pointer">Delete account</span>
        <span className="hover:underline cursor-pointer">Sign out</span>
       </div>
      </div>
    </div>
  );
};
