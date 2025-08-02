import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
// import logo from '../../assets/images/logo/Stahlbeizen Logo header.png'
import Collapse from 'bootstrap/js/dist/collapse'

const Navbar = () =>{

const location = useLocation()

useEffect(()=>{
    // Collapse the navbar after route change
    const NavEl = document.querySelector("#navbarNav")

    if(NavEl && NavEl.classList.contains("show")){
        const bsCollapse = Collapse.getInstance(NavEl) || new Collapse(NavEl, { toggle: false });
        bsCollapse.hide();
     }
}, [location])

 return(
    <>
     <nav className="navbar navbar-expand-lg p-3 bg-secondary sticky-top border-bottom" id="navbar">
        <div className="container-fluid">
            
            <NavLink to='/' className='navbar-brand fw-bolder text-uppercase text-light animate__animated animate__fadeIn animate__infinite infinite'>
             {/* <img src={ logo } className="img-fluid position-absolute d-lg-block d-md-block d-none" id="logoNavbar" /> */}
            </NavLink>

            <button className='navbar-toggler bg-light' type='button' data-bs-toggle='collapse' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'  data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>

            <div className="collapse justify-content-start navbar-collapse" id="navbarNav">

             <ul className="navbar-nav">
              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/" className="fw-bolder text-decoration-none text-light">Home</NavLink>
              </li>
              
              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/about" className="fw-bolder text-decoration-none text-light   ">About</NavLink>
              </li>

              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/services" className="fw-bolder text-decoration-none text-light   ">Services</NavLink>
              </li>

              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/team" className="fw-bolder text-decoration-none text-light ">Team</NavLink>
              </li>

              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/portfolio" className="fw-bolder text-decoration-none text-light  ">Portfolio</NavLink>
              </li>

              <li className="nav-item ps-lg-4 pe-lg-4 pb-lg-0 pb-md-0 pb-3">
                 <NavLink to="/contact" className="fw-bolder text-decoration-none text-light ">Contact</NavLink>
              </li>
             </ul>

            </div>

        </div>
     </nav>
    </>
 )

}

export default Navbar