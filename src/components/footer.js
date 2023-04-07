import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="container-fluid border-top mt-4">
      <footer className="">
        <div className="row p-4">
          <div className="col-6 col-md-3 mb-3">
            <h5 className='text-secondary'>Technology</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  Current Programs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  Tech Events
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  Our Curriculums
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  Featured Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className='text-secondary'>Education</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  CBC in Kenya
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to={"/software"}
                >
                  Our Initiatives
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className='text-secondary'>Sports</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to="/sports"
                >
                  Tournaments
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to="/sports"
                >
                  Past Events
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to="/football-clubs"
                >
                  Football Clubs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted"
                  to="/sports"
                >
                  Marathon
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5 className='text-secondary'>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                +254 724 508 283
              </li>
              <li className="nav-item mb-2">
                info@momifoundation.org
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between border-top pt-2">
          <p>&copy; 2023 Momi Foundation, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <BsLinkedin />
            </li>
            <li className="ms-3">
              <BsFacebook />
            </li>
            <li className="ms-3">
              <BsTwitter />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
