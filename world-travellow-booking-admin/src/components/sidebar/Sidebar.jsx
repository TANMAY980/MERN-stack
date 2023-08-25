
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { DarkModeContext } from "../../context/darkModeContext";
import {Link} from"react-router-dom";
import{useContext} from "react";

const Sidebar = () => {

  const{dispatch}=useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Travellow Admin</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <li>
           <DashboardIcon className="icon"/>
            <span> Dashbord</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
           <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
            <li>
            <ProductionQuantityLimitsIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <Link to="/Delivery" style={{textDecoration:"none"}}>
          <li>
          <DeliveryDiningIcon className="icon"/>
            <span>Delivery</span>
          </li>
          </Link>
          <li>
          <BorderColorIcon className="icon"/>
            <span>Orders</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
          <NotificationsActiveIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <li>
          <QueryStatsIcon className="icon"/>
          <span>stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
          <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
          <PermIdentityIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
        </div>
      <div className="bottom">
        <div className="ColorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="ColorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
