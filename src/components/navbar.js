import React from 'react';
import { images } from '../assets';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item align-items-center px-2">
              <img 
                className='rounded-circle'
                src={images.logo}
                alt=''
                width={40}
                height={40}
              />
            </li>
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">About</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active">Sports</div>
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
                  <a className="dropdown-item">Software</a>
                </li>
                <li>
                  <a className="dropdown-item">Project Management</a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item">Software</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="nav-link active">Education</div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
