
import   LanguageOutlinedIcon  from "@mui/icons-material/LanguageOutlined";
import   SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import   DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import   FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import   NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import   ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import   ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const{dispatch}=useContext(DarkModeContext)

  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search...." />
            <SearchOutlinedIcon className="icon"/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon"/>
              ENGLISH
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="avatar"/>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default Navbar
