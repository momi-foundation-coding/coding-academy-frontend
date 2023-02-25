import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom';
import { images } from '../../assets';


const SoftwareScreen = () => {
  return (
    <div>
      <Navbar />
      <div
        className='d-flex justify-content-around align-items-center mt-4 mb-4 pt-4 pb-4'
      >
        <div className='col-7'>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='align-self-center col-8 text-success'>Build your Career</h1>
            <p className='col-8'>
              At Momi Foundation, we are running different software engineer classes, 
              events, online mentoring and support in career progression and interview process.
              We will help you build your technical skills, software skills and interact with 
              world class software engineer.
            </p>
            <Link className='col-8' to='/register-software'>
              <button 
                type='button'
                className='btn btn-success col-4'
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
        <div className='col-md-4 p-4 p-md-3 border rounded-3 bg-light'>
          <h3 className='text-success'>Career Goals</h3>
          <ul>
            <li>Full-stack Engineer</li>
            <li>Back-end Engineer</li>
            <li>Front-end Engineer</li>
            <li>DevOps Engineer</li>
            <li>Project Manager</li>
            <li>Product Manager</li>
          </ul>
        </div>
      </div>
      <div
        className='container-fluid bg-light mb-4 align-items-center p-4'
      >
        <h3 className='text-center pt-2 text-success' >About Momi Foundation</h3>
        <p className='text-center pt-2'>
          Momi Foundation is a non profit organization
          that is looking forward to empowering the community
          <br /> through technology, talent, and education
        </p>
      </div>
      <div className='d-flex justify-content-around pt-4'>
        <div className='col-md-5'>
          <img src={images.AJP_0113} alt='' height='350' />
        </div>
        <div className='col-md-5'>
          <h3 className='text-success'>What you'll learn</h3>
          <ul>
            <li>Executing full lifecycle software development</li>
            <li>Programming well-designed, testable, efficient code</li>
            <li>Producing specifications and determine operational feasibility</li>
            <li>Develop flowcharts, layouts and documentation to identify requirements and solutions</li>
            <li>Develop software verification plans and quality assurance procedures</li>
            <li>Integrate software components into a fully functional software system</li>
            <li>Troubleshoot, debug and upgrade existing systems</li>
            <li>Deploy programs and evaluate user feedback</li>
            <li>Comply with project plans and industry standards</li>
            <li>Ensure software is updated with latest features</li>
            <li>Project estimation, planning and execution</li>
            <li>Learn how to work in a team, motivate and lead</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SoftwareScreen
