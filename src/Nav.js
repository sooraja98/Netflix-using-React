// import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  // const [show,handleShow]=useState(false)
  // useEffect(()=>{
  //   Window.addEventListener("scroll",()=>{
  //     if(window.scrollY>100){
  //       handleShow(true);
  //     }else handleShow(false);
  //   })
  //   return()=>{
  //     window.removeEventListener("scroll")
  //   }
  // },[])
  return (
    <div className={'nav'}>
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="netflix-logo"
        className="nav_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="avathar logo"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
