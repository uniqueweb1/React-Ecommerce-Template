import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Slider from './Slider'

export default function Header() {
  return (
    <>
    <header>
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Logo
      </Link>
      <ul className="right-section">
      <ul className="search-icons">
     <input type="search" name="" id="" placeholder="Search here..." /><span className="icon-btn"><i className="fas fa-search"></i></span>
       </ul>
       <div className="right-links"><a href="">Home |</a><a href="">Gallery |</a><a href="">Feedback |</a><a href="">Contact us</a></div> 
       </ul>
    </nav>
  

   
    <div className="nav2">
       <div className="right-link2"><a href="" className="links">HOME&nbsp;&nbsp;&nbsp;&nbsp;</a><a href="" className="links">ABOUT IEPL   &nbsp;</a><a href="" className="links">PRODUTS & SERVICES   &nbsp;</a><a href="" className="links">MEDIA   &nbsp;</a><a href="" className="links">BONUSES   &nbsp;</a><a href="" className="links">SHOPPING CARTS  &nbsp;</a><a href="" className="links">AFFILIATE COMMISIONS  &nbsp;</a><a href="" className="links">COMMITMENT     &nbsp;</a></div>
          </div>
          <Slider />
          </header>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
