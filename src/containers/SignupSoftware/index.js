import React from 'react';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'
import Button from '../../components/Button';

const RegisterSoftware = () => {
  return (
    <div>
      <Navbar />
      <div className='d-flex justify-content-center'>
        <div className="container col-xl-8 col-xxl-10 px-2 py-3">
          <div className="row align-items-center g-lg-5 py-5">
            <div
              className="col-lg-5 text-center text-lg-start"
            >
              <h3 className="display-6 fw-bold lh-1 mb-3">
                Register To Learn Software
              </h3>
              <p className="col-lg-12 fs-5">
                Get the best out of our programs and be an expert in one of the fields below:
              </p>
              <ul>
                <li>Full-stack Engineer</li>
                <li>Back-end Engineer</li>
                <li>Front-end Engineer</li>
                <li>DevOps Engineer</li>
                <li>Project Manager</li>
                <li>Product Manager</li>
              </ul>
            </div>
            <div className="col-md-10 mx-auto col-lg-7">
              <form className="p-4 p-md-6 border rounded-3 bg-light">
                <h5 className='pb-2 font-weight-bold'>Create Your Momi Account</h5>
                <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <Button
                  btnType="success"
                  className="w-100 btn-lg"
                  type="submit">
                  Sign up
                </Button>
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

export default RegisterSoftware;
