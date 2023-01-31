import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "../utils/cookie";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const currentRole = JSON.parse(getCookie("userDetails")).role;

  return auth?.user && allowedRoles.find((role) => role === currentRole) ? (
    <Outlet />
  ) : (
    <Navigate to="signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
