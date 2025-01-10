import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <>
      <div>
        <p>UserName: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    </>
  );
};
export default Profile;
