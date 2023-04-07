import React from 'react'
import { images } from '../../assets';


const AboutUs = () => {
  return (
    <div className='m-3'>
      <h1 className='text-center text-success m-3'>About Us</h1>
      <div className='d-flex justify-content-center'>
        <div className='col-md-5'>
          <img
            src={images.youth}
            className="rounded img-responsive"
            alt=''
          />
        </div>
        <div className='col-6 m-3'>
          <div className='d-flex flex-column m-3'>
            <h3 className=''>Who we are?</h3>
            <p className='w-75'>
              Momi foundation is a community-based organization that looks forward to empowering youth and 
              community through technology, talent, and education. 
              We are made with the mind that youth and the community in general 
              play an essential part in the development of this country. Moreover, technology, education, 
              and talent are 3 key factors to such development success. 
            </p>
            <button
              type='button'
              className='btn btn-warning text-white w-25'
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
