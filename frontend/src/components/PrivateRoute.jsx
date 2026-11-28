import {useSelector} from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';

export default function PrivateRoute() {
  const currentuser = useSelector((state) => state.user.currentuser);

  if (!currentuser) {
    return <Navigate to="/signin" />;
  }
 
  return (
    <Outlet />
  )
}
