import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  signoutUserStart,
  signoutUserSuccess,
  signoutUserFailure
} from '../redux/user/userSlice.js';
import { Link } from 'react-router-dom';

export default function Profile() {
  const currentUser = useSelector((state) => state.user.currentuser);
  const user = currentUser?.others;
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const updates = {
        username: formData.username ?? user.username,
        email: formData.email ?? user.email,
      };
      if (formData.password) {
        updates.password = formData.password;
      }

      const res = await fetch(`/backend/user/update/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        dispatch(updateUserFailure(data.message || 'Could not update profile'));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (err) {
      dispatch(updateUserFailure(err.message));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!user) {
    return null;
  }
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/backend/user/delete/${user._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        dispatch(deleteUserFailure(data.message || 'Could not delete account'));
        return;
      }
      dispatch(deleteUserSuccess()); 
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch('/backend/auth/signout', {
        method: 'GET',
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        dispatch(signoutUserFailure(data.message || 'Could not sign out'));
        return;
      }
      dispatch(signoutUserSuccess());
    }
    catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };


  return (
     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username ?? user.username}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
          
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email ?? user.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
          
          />
          <input
            type="password"
            name="password"
            placeholder="New password"
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-700 focus:border-[#007bff] focus:outline-none"
          />
          <button 
            disabled={loading}
            type="submit"
            className="w-full rounded bg-[#007bff] py-2.5 font-semibold text-white transition hover:bg-[#0056b3]"
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
          <Link to='/create-listing' className="w-full rounded bg-[#28a745] py-2.5 font-semibold text-white transition hover:bg-[#218838] text-center block">
            Create Listing
          </Link>
        </form>
        {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
        {updateSuccess && <p role="alert" className="mt-4 text-sm text-green-600">Profile updated successfully!</p>}
       <div className="mt-4 flex justify-between text-sm text-red-600">
        <span onClick={handleDeleteUser} className="hover:underline cursor-pointer">Delete account</span>
        <span onClick={handleSignOut} className="hover:underline cursor-pointer">Sign out</span>
       </div>
      </div>
    </div>
  );
};
