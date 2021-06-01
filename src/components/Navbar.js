import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [show, setShow] = React.useState(false)
  const linksContainerRef = React.useRef(null)
  const linksRef = React.useRef(null)

  React.useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  }, [show])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links-container" ref={linksContainerRef}>
          <div className="nav-links" ref={linksRef}>
            <Link to="/" className="nav-link" activeClassName="active-link">
              home
            </Link>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
            >
              recipes
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              about
            </Link>
            <Link to="/tags" className="nav-link" activeClassName="active-link">
              tags
            </Link>
          </div>
        </div>
        <div className="nav-link contact-link">
          <Link to="/contact" className="btn">
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
