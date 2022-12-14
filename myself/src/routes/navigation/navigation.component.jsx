import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/code-circle.svg';
import { ReactComponent as MenuLogo } from '../../assets/menu-2.svg';
import ProfilePicture from '../../assets/profile-pic.jpg'
import './navigation.styles.css';
import SideNavBarLogo from '../../components/side-navbar-logo/side-navbar-logo.component';
import SideNavbarList from '../../components/side-navbar-list/side-navbar-list.component';
import SideNavbarProfile from '../../components/side-navbar-profile/side-navbar-profile.component';
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return(
        <Fragment>
            <div className={`sidebar ${active ? 'active' : ''}`}>
                <SideNavBarLogo logoName={"LifeMan"} logoIcon={<Logo/>}/>
                <MenuLogo className="menu-icon" onClick={handleClick}/>
                <SideNavbarList />
                <SideNavbarProfile 
                    profileImg={ProfilePicture} 
                    name={"Miguel Tang"}
                    job={"Software Engineer"}
                />
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;