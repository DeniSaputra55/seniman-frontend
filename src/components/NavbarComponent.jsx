import { Container, Nav, Navbar } from "react-bootstrap"
import {navLinks} from  "../data/index"
import { NavLink } from "react-router-dom"

import { useState, useEffect } from "react"




const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect (() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor)
  })


  return (
    <div>
       <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand  className="fs-3 fw-bold judul"> <a href="/">S. </a> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            {
                navLinks.map((dataLink => {
                    return ( 
                    <div className="nav-links " key={dataLink.id}>
                        <NavLink to={dataLink.path}  className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "active" : ""
                      } end >
                        {dataLink.text}
                      </NavLink>
                    </div>
                    )
                }))
            }
          </Nav>

          <div className="text-center">
            <button className="btn btn btn-outline-primary rounded-2 me-3">Masuk</button>
            <button className="btn btn btn-primary  rounded-2">Daftar</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComp