import React from 'react'
import { images } from '../../assets'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'


const LoginScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center py-5">
        <form className='p-4 d-flex flex-column w-50 align-items-center'>
          <img className="mb-4" src={images.logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="w-50 form-floating mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="w-50 form-floating mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="w-50 checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-50 btn btn-lg btn-success" type="submit">Sign in</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default LoginScreen
