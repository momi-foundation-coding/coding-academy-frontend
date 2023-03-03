import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import Button from './Button';


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        {/* <div class="navbar-brand" href="#">Navbar</div> */}
        <Button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </Button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item align-items-center px-2">
              <Link to="/">
                <img 
                  className='rounded-circle'
                  src={images.logo}
                  alt=''
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link active" aria-current="page" role="button">About</div>
            </li>
            <li className="nav-item">
              <Link to="/sports">
                <div className="nav-link active" aria-current="page" role="button">Sports</div>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button" data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </div>
              <ul className="dropdown-menu">
                <li>
                  <div className="dropdown-item">Software</div>
                </li>
                <li>
                  <div className="dropdown-item">Project Management</div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <div className="dropdown-item">Software</div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="nav-link active" role="button">Education</div>
            </li>
            <li className="nav-item">
              <Link to="/software">
                <div className="nav-link active" aria-current="page" role="button">Software</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">
                <div className="nav-link active" aria-current="page" role="button">Blog</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/football-clubs">
                <div className="nav-link active" aria-current="page" role="button">Football Clubs</div>
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search"> */}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Button className="btn btn-outline-success" type="submit">Search</Button> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
