import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom';


const SoftwareScreen = () => {
  return (
    <div>
      <Navbar />
      <div className='d-flex justify-content-center'>
        <div className="container col-xl-8 col-xxl-10 px-2 py-3">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-6 fw-bold lh-1 mb-3">
                Sign Up To Learn Software Engineering
              </h1>
              <p className="col-lg-12 fs-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                remaining essentially unchanged. 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-6">
              <form className="p-4 p-md-6 border rounded-3 bg-light">
                <h5 className='pb-2 font-weight-bold'>Please Fill Details Here</h5>
                <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign up</button>
                <div className='d-flex mt-2'>
                  <p className='px-2'>Already have an account?</p>
                  <Link className='link-success' to="/login">Login</Link>
                </div>
                <hr className="my-2" />
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoftwareScreen
