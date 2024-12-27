
import { NavLink } from 'react-router-dom'
import s from "./AuthNav.module.css"
import clsx from 'clsx';
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.wrapper}>
      <NavLink to="/registration" className={buildLinkClass}>Registration</NavLink>
      <NavLink to="/login" className={buildLinkClass}>Log in</NavLink>
  </div>
  )
}

export default AuthNav