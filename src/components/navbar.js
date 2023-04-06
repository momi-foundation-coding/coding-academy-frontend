import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import { useLocation } from 'react-router-dom'

const pathLookUp = {
  '/sports': 'sports',
  '/software': 'software',
  '/football-clubs': 'football-clubs',
  '/blog': 'blog'
}

const NavBar = () => {
  const { pathname } = useLocation();
  const nameOfPath = pathLookUp[pathname]

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100 justify-content-around me-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item align-items-center px-2">
              <Link to="/">
                <img 
                  className='rounded-circle'
                  src={images.logo}
                  alt=''
                  width={60}
                  height={60}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports">
                <button
                  className={`btn btn-outline-success ${nameOfPath === 'sports' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Sports
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/software">
                <button
                  className={`btn btn-outline-success ${nameOfPath === 'software' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Learning
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/football-clubs">
                <button 
                  className={`btn btn-outline-success ${nameOfPath === 'football-clubs' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Football Clubs
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">
                <button
                  className={`btn btn-outline-success ${nameOfPath === 'blog' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Blog
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
