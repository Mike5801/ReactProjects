import { Fragment } from 'react';
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
            <SideNavbarElement title={"Dashboard"} icon={<DashBoardIcon/>}/>
            <SideNavbarElement title={"Analytics"} icon={<AnalyticsIcon/>}/>
            <SideNavbarElement title={"Folder"} icon={<FolderIcon/>}/>
            <SideNavbarElement title={"Favorites"} icon={<HeartIcon/>}/>
            <SideNavbarElement title={"User"} icon={<UserIcon/>}/>
            <SideNavbarElement title={"Settings"} icon={<SettingsIcon/>}/>
        </ul>
    );
}

export default SideNavbarList;