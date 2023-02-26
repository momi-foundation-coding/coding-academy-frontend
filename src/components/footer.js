import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="container-fluid border-top mt-4">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Technology</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Programs</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Tech Events</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Our Curriculums</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Featured Events</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted"></Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Education</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">CBC in Kenya</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Our Programs</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Charity</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Sports</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Tournaments</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Past Events</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">Look Back</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">FAQs</Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-success" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
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
