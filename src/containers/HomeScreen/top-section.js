import React from 'react'
import { images } from '../../assets';

const TopSection = () => {
  return (
    <div
      className='d-flex justify-content-around align-items-center'
    >
      <div className='col-7'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='text-primary'>Momi Foundation</h1>
          <p className='w-75'>
            Momi foundation is a community-based organization that looks forward to empowering youth and 
            community through technology, talent, and education. 
            We are made with the mind that youth and the community in general 
            play an essential part in the development of this country. Moreover, technology, education, 
            and talent are 3 key factors to such development success. 
          </p>
          <div className='d-flex'>
            <button
              type='button'
              className='btn btn-success align-self-center m-3'
            >
              Look at Past and Future
            </button>
            <button
              type='button' 
              className='btn btn-warning text-white align-self-center m-3'
            >
              Support Our Vision & Mission
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-5'>
        <img
          src={images.youth}
          className="rounded img-responsive"
          width="600"
          height=""
          alt=''
        />
      </div>
    </div>
  )
}

export default TopSection
