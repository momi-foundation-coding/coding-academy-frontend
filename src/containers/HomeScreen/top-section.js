import React from 'react'
import { images } from '../../assets';
import Button from '../../components/Button';

const TopSection = () => {
  return (
    <div
      className='d-flex justify-content-around align-items-center'
    >
      <div className='col-7'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='align-self-center'>Momi Foundation</h1>
          <p>
            The organization is looking forward to empowering the community <br />
            Through technology, talent, and education
          </p>
          <Button btnType="success">Learn More</Button>
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
