import './side-navbar-element.styles.css';
import { Link } from 'react-router-dom';

const SideNavbarElement = ({title, icon, route}) => {
    return(
        <li className="nav-list-element">
            <Link className='link-element' href="#" to={`/${route}`}>
                {icon}
                <span className="links-name">{title}</span>
            </Link>
            <span className="tooltip">{title}</span>
        </li>
    );
}

export default SideNavbarElement;