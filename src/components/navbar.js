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
    <nav className="navbar navbar-expand-lg mb-3 border-bottom">
      <div className="container-fluid">
        <button
          className="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav w-100 justify-content-between me-auto mb-lg-0 align-items-center">
            <div>
              <li className="nav-item align-items-center px-2">
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
                    className={`btn ${nameOfPath === 'sports' ? 'text-secondary' : 'text-primary'}`}
                    aria-current="page"
                  >
                    <h4>Sports</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/software">
                  <button
                    className={`btn ${nameOfPath === 'software' ? 'text-secondary' : 'text-primary'}`}
                    aria-current="page"
                  >
                    <h4>Learning</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/football-clubs">
                  <button 
                    className={`btn ${nameOfPath === 'football-clubs' ? 'text-secondary' : 'text-primary'}`}
                    aria-current="page"
                  >
                    <h4>Football Clubs</h4>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">
                  <button
                    className={`btn ${nameOfPath === 'blog' ? 'text-secondary' : 'text-primary'}`}
                    aria-current="page"
                  >
                    <h4>Blog</h4>
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
