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
            <li>Quality Assurance Engineer</li>
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
      <div
        className='container-fluid border-top mb-4 align-items-center p-4'
      >
        <h3 className='text-center text-success'>Our Programs</h3>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">Front-end Engineer</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Computer Science Fundamentals</li>
                <li>C programming</li>
                <li>Introduction to Python Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Git & Shell Scripting</li>
                <li>SQL and NoSQL Databases</li>
                <li>Itroduction to Web Development</li>
                <li>Learn HTML and CSS</li>
                <li>Learn Javascript</li>
                <li>Learn React</li>
                <li>Backend Development with Flask</li>
                <li>Backend Development with NodeJS</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">Back-end Engineer</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Computer Science Fundamentals</li>
                <li>C programming</li>
                <li>Introduction to Python Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Git & Shell Scripting</li>
                <li>SQL and NoSQL Databases</li>
                <li>Itroduction to Web Development</li>
                <li>Learn HTML and CSS</li>
                <li>Learn Javascript</li>
                <li>Learn React</li>
                <li>Backend Development with Flask</li>
                <li>Backend Development with NodeJS</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">DevOps Engineer</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Computer Science Fundamentals</li>
                <li>C programming</li>
                <li>Introduction to Python Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Git & Shell Scripting</li>
                <li>SQL and NoSQL Databases</li>
                <li>Itroduction to Web Development</li>
                <li>Learn HTML and CSS</li>
                <li>Learn Javascript</li>
                <li>Learn React</li>
                <li>Backend Development with Flask</li>
                <li>Backend Development with NodeJS</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">Project Manager</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Agile Project Management</li>
                <li>Quality Control</li>
                <li>Communication</li>
                <li>Change Management</li>
                <li>Risk Management</li>
                <li>Strategic Alignment</li>
                <li>Stakeholder Management</li>
                <li>resource Management</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">Product Manager</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Agile Project Management</li>
                <li>Quality Control</li>
                <li>Communication</li>
                <li>Change Management</li>
                <li>Risk Management</li>
                <li>Strategic Alignment</li>
                <li>Stakeholder Management</li>
                <li>resource Management</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h5><strong className="d-inline-block mb-2 text-success">Quality Assurance Engineer</strong></h5>
                <div className="mb-1 text-muted">Area of Learning</div>
                <li>Agile Project Management</li>
                <li>Quality Control</li>
                <li>Communication</li>
                <li>Change Management</li>
                <li>Risk Management</li>
                <li>Strategic Alignment</li>
                <li>Stakeholder Management</li>
                <li>resource Management</li>
                <button className="btn btn-success col-md-6 mt-4">Check Path</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='container-fluid border-top mb-4 align-items-center p-4'
      >
        <h3 className='text-center text-success'>Here From Our Community</h3>
        <div className="d-flex justify-content-around row mb-2">
          <div className="col-md-3">
            <div className="row border p-2 rounded flex-md-row mb-4 position-relative">
              <strong className="d-inline-block mb-2 text-success">Ezrqn kemboi, Kenya</strong>
              <p>
                Momi Foundation has helped me understand software development. I am confident right Now
                that I am ready and prepared to apply for Junior to mid-level jobs. Also, apart 
                from learning coding, I was able to learn leadership skills, project management, 
                soft skills and general team building.
              </p>
              <p className="mb-1 text-muted">February 2023</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row p-2 border rounded flex-md-row mb-4 position-relative">
              <strong className="d-inline-block mb-2 text-success">David Mwangi, Kenya</strong>
              <p>
                Momi Foundation has helped me understand software development. I am confident right Now
                that I am ready and prepared to apply for Junior to mid-level jobs. Also, apart 
                from learning coding, I was able to learn leadership skills, project management, 
                soft skills and general team building.
              </p>
              <p className="mb-1 text-muted">February 2023</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row p-2 border rounded flex-md-row mb-4 position-relative">
              <strong className="d-inline-block mb-2 text-success">Mark Too, Kenya</strong>
              <p>
                Momi Foundation has helped me understand software development. I am confident right Now
                that I am ready and prepared to apply for Junior to mid-level jobs. Also, apart 
                from learning coding, I was able to learn leadership skills, project management, 
                soft skills and general team building.
              </p>
              <p className="mb-1 text-muted">February 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='container-fluid bg-light mb-4 p-4'
      >
        <h3 className='text-center pt-2 text-success'>Get In Touch</h3>
        <p className='text-center pt-2'>
          We are here to help you progress in your career
        </p>
        <Link className='d-flex justify-content-center col-12' to='/register-software'>
          <button 
            type='button'
            className='btn btn-success col-2'
          >
            Register Now
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default SoftwareScreen
