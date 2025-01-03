
import { useDispatch, useSelector } from "react-redux"
import s from "./UserMenu.module.css"
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
const UserMenu = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
   const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
       <p className={s.username}>Welcome, {user.name}</p>
       <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
  </div>
  )
}

export default UserMenu