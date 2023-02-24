import React from 'react'
// import { BsCode, BsBicycle, BsHouse } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";

const DashboardScreen = () => {
  return (
    <div className='d-flex'>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light col-md-2"
        style={{ height: "100vh" }}
      >
        {/* <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <BsBicycle />
          <span className="fs-4">Sidebar</span>
        </Link> */}
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <div className="nav-link active" aria-current="page">
              <BsHouse />
              Home
            </div>
          </li>
          <li>
            {/* <a href="#" className="nav-link link-dark">
              <BsCode />
              Dashboard
            </a> */}
          </li>
          <li>
            {/* <a href="#" className="nav-link link-dark">
              <BsCode />
              Orders
            </a> */}
          </li>
          <li>
            {/* <a href="#" className="nav-link link-dark">
              <BsCode />
              Products
            </a> */}
          </li>
          <li>
            {/* <a href="#" className="nav-link link-dark">
              <BsCode />
              Customers
            </a> */}
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          {/* <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a> */}
          {/* <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul> */}
        </div>
      </div>
      <div classNameName='col-md-10'>
        <h1>All Good</h1>
      </div>
    </div>
  )
}

export default DashboardScreen
