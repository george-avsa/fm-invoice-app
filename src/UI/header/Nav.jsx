import './nav.css';
import logo from './../../images/logo.svg';
import darkThemeIcon from "./../../images/darkThemeIcon.svg";

export function Nav() {
    return (
        <nav>
            <img src={logo} alt="" className='nav__logo' />
            <img src={darkThemeIcon} className='nav__dark-light-logo'></img>
        </nav>
    );
}