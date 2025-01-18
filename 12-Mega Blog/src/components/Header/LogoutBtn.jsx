import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const LogoutBtnHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return <button onClick={LogoutBtnHandler}>Logout Btn</button>;
}

export default LogoutBtn;
