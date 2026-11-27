import { useSelector } from 'react-redux';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.js';
import {useDispatch} from 'react-redux';
import {signinSuccess} from '../redux/user/userSlice.js';
import{ useNavigate } from 'react-router-dom';
export default function OAuth() {
 const navigate = useNavigate();
 const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, provider);

        const res = await fetch('/backend/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: result.user.email,
            name: result.user.displayName,
            photoURL: result.user.photoURL,
          })
        });
        const data = await res.json();
        console.log('Backend authentication response:', data);
        dispatch(signinSuccess(data));
        navigate('/');
    }
    catch (error) {
      console.error('could not sign in with Google', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}
            type="button"
            className="w-full rounded bg-red-500 py-2.5 font-semibold text-white transition hover:bg-red-600"
          >
            Continue with Google
          </button>
  )
}
