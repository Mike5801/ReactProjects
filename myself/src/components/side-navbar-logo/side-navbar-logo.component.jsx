import './side-navbar-logo.styles.css';
import { ReactComponent as MenuLogo } from '../../assets/menu-2.svg';

const SideNavbarLogo = ({logoName, logoIcon}) => {
    return(
        <div className="logo-content">
            <div className="logo">
                {logoIcon}
                <div className="logo-name">{logoName}</div>
            </div>
            <MenuLogo className="logo-icon"/>
        </div>
    );
}

export default SideNavbarLogo;