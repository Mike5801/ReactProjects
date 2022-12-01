import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/code-circle.svg';
import ProfilePicture from '../../assets/profile-pic.jpg'
import './navigation.styles.css';
import SideNavBarLogo from '../../components/side-navbar-logo/side-navbar-logo.component';
import SideNavbarList from '../../components/side-navbar-list/side-navbar-list.component';
import SideNavbarProfile from '../../components/side-navbar-profile/side-navbar-profile.component';
import { Fragment } from "react";
const Navigation = () => {
    return(
        <Fragment>
            <div className='sidebar'>
                <SideNavBarLogo logoName={"CodeLab"} logoIcon={<Logo/>}/>
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