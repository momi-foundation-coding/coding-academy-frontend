import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <div className="nav-link active" aria-current="page" role="button">Sports</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/software">
                <div className="nav-link active" aria-current="page" role="button">Learning</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/football-clubs">
                <div className="nav-link active" aria-current="page" role="button">Football Clubs</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">
                <div className="nav-link active" aria-current="page" role="button">Blog</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
