import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData';
function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
            {SidebarData.map((val,key)=>{
                return(
                    <li className='SidebarRow'
                     id={window.location.pathname === val.link ? "SidebarRowActive": "" }
                    key={key} onClick={()=>{window.location.pathname=val.link}}>
                        {" "}
                        <div id='SidebarIcon'>{val.icon}</div>{" "}
                        <div id='SidebarTitle'>
                            {val.title}
                        </div>
                    </li>
                );
            })
            }
        </ul>
    </div>
  )
}

export default Sidebar
