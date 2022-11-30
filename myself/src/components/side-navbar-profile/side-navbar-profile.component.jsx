import './side-navbar-profile.styles.css';
import { ReactComponent as LogoutIcon } from '../../assets/logout.svg';

const SideNavbarProfile = ({profileImg, name, job, icon}) => {
    return(
        <div className="profile-content">
            <div className="profile">
                <div className="profile-details">
                    <img src={profileImg} alt="" />
                    <div className="name-job">
                        <div className="name">{name}</div>
                        <div className="job">{job}</div>
                    </div>
                </div>
                <LogoutIcon className="log-out-icon"/>
            </div>
        </div>
    );
}

export default SideNavbarProfile;