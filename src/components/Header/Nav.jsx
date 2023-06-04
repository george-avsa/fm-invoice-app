import './nav.css';
import logo from './../../images/logo.svg';
import darkThemeIcon from "./../../images/darkThemeIcon.svg";
import avatar from "./../../images/avatar.png";
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from './../../store/settings';

export function Nav() {
    const dispatch = useDispatch();

    const theme = useSelector(state => state.settings.theme);

    function handleTheme(e) {
        dispatch(toggleTheme())
    }

    return (
        <nav className={`nav--${theme}`}>
            <div className='nav__grow'>
                <img src={logo} alt="" className='nav__logo' />
            </div>
            {theme === 'dark' 
                ? <div className='nav__light-theme' onClick={(e) => handleTheme(e)} />
                : <img src={darkThemeIcon} className='nav__dark-light-icon' onClick={(e) => handleTheme(e)}></img>
            }
            <hr />
            <div className="nav__avatar">
                <img src={avatar} className='nav__dark-light-logo'></img>
            </div>
        </nav>
    );
}