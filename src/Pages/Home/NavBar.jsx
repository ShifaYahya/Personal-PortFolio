import React from 'react'
import {useState, useEffect } from 'react'
import {Link} from 'react-scroll'
const NavBar = () => {
    const [navActive, setNavActive] = useState(false);
   const toggleNav = () =>{
    setNavActive(!navActive);
   } //to keep track if the navbar is acive or not
   const closeMenu = () =>{
    setNavActive(false);
   }
   useEffect(()=>{
   const handleResize = () =>{
    if (window.innerWidth <= 500){
        closeMenu
    }
   }
   window.addEventListener("resize", handleResize)   //handling resizing
   return ()=>{
   window.removeEventListener("resize", handleResize)
   }
   }, [])

   useEffect(()=>{
   if(window.innerWidth <= 1200){
    closeMenu;
   }
   
   }, [])
//dynamically asssigning classnames depending on navActive state/variable
  return (   
    <nav className ={`navbar  ${navActive? "active": ""}`}> 
        <div>
            <img src="./img/logo14.png" alt="logo" height={23} width={120}></img>
        </div>
        <a className={`nav__hamburger ${navActive? "active": ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>  
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive? "active": ""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
                </li>
                <li>
                <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="mySkills" className="navbar--content">My Skills</Link>
                </li>
                <li>
                <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Portfolio" className="navbar--content"> Projects</Link>
                </li>
                <li>
                <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
                </li>
                
            </ul>

        </div>
        <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>
    </nav>   
  )
}

export default NavBar