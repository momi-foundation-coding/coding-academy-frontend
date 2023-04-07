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
    <nav class="navbar navbar-expand-lg mb-3 border-bottom">
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
          <div class="navbar-nav w-100 justify-content-between me-auto mb-lg-0 align-items-center">
            <div>
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
            </div>
            <div className='d-flex justify-content-around col-6'>
              <li className="nav-item">
                <Link to="/sports">
                  <button
                    className={`btn text-primary ${nameOfPath === 'sports' ? 'active' : ''}`}
                    aria-current="page"
                  >
                    <h4>Sports</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/software">
                  <button
                    className={`btn text-primary ${nameOfPath === 'software' ? 'active' : ''}`}
                    aria-current="page"
                  >
                    <h4>Learning</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/football-clubs">
                  <button 
                    className={`btn text-primary ${nameOfPath === 'football-clubs' ? 'active' : ''}`}
                    aria-current="page"
                  >
                    <h4>Football Clubs</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">
                  <button
                    className={`btn text-primary ${nameOfPath === 'blog' ? 'active' : ''}`}
                    aria-current="page"
                  >
                    <h4>Blog</h4>
                  </button>
                </Link>
              </li>
            </div>
          </div>
          {/* <ul class="navbar-nav w-100 justify-content-between me-auto mb-2 mb-lg-0 align-items-center"> */}
            
          {/* </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
