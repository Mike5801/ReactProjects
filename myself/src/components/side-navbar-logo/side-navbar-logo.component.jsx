import './side-navbar-logo.styles.css';

const SideNavbarLogo = ({logoName, logoIcon}) => {
    return(
        <div className="logo-content">
            <div className="logo">
                {logoIcon}
                <div className="logo-name">{logoName}</div>
            </div>
        </div>
    );
}

export default SideNavbarLogo;