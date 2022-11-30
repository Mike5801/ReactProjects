import './side-navbar-element.styles.css';

const SideNavbarElement = ({title, icon}) => {
    return(
        <li className="nav-list-element">
            <a href="#">
                {icon}
                <span className="links-name">{title}</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
        </li>
    );
}

export default SideNavbarElement;