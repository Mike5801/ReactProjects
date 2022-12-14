import './side-navbar-list.styles.css';
import SideNavbarElement from '../side-navbar-element/side-navbar-element.component';
import { ReactComponent as DashBoardIcon } from '../../assets/layout-grid.svg';
import { ReactComponent as AnalyticsIcon } from '../../assets/chart-pie.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as FolderIcon } from '../../assets/folder.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';


const SideNavbarList = () => {
    return(
        <ul className='nav-list'>
            <SideNavbarElement title={"Dashboard"} icon={<DashBoardIcon/>} route=""/>
            <SideNavbarElement title={"Analytics"} icon={<AnalyticsIcon/>} route="analytics"/>
            <SideNavbarElement title={"File Manager"} icon={<FolderIcon/>} route="file-manager"/>
            <SideNavbarElement title={"Favorites"} icon={<HeartIcon/>} route="favorites"/>
            <SideNavbarElement title={"User"} icon={<UserIcon/>} route="user"/>
            <SideNavbarElement title={"Settings"} icon={<SettingsIcon/>} route="settings"/>
        </ul>
    );
}

export default SideNavbarList;