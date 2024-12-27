import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx';

const Navigation = () => {
	const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
	const isLoggedIn = true
  return (
	  <nav className={s.nav}>
		  <NavLink to="/" className={buildLinkClass}>Home</NavLink>
		  {isLoggedIn && <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>}
	</nav>
  )
}

export default Navigation