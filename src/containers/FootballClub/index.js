import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { BsArrowRight } from 'react-icons/bs';
import { images } from '../../assets';


const players = [
  {
    "name": "Roger Kemboi",
    "position": "1",
    "image": images.AJP_0003
  },
  {
    "name": "Mark Too",
    "position": "13",
    "image": images.AJP_0270
  },
  {
    "name": "Oliver Kiprop",
    "position": "12",
    "image": images.AJP_0178
  },
  {
    "name": "Festus Kop",
    "position": "9",
    "image": images.AJP_0190
  }
]

const FootballClub = () => {
  const [show, setShow] = useState('1')

  const handleChangeTab = (item) => {
    setShow(item)
  }
  
  console.log(players, handleChangeTab)

  return (
    <div className=''>
      <Navbar />
      <div
        className='container-fluid mb-4 p-4'
      >
        <div
          className={
            `d-flex p-4 p-md-5 mb-4 rounded 
            text-bg-success align-items-center
            `
          }
        >
          <img
            src={images.AJP_0190}
            alt=''
            width={100}
            height={100}
            style={{
              borderRadius: 50,
              marginRight: 20
            }}
          />
          <h1>Cheles FC</h1>
        </div>
        <nav>
        <div className="nav nav-tabs" id="myTab" role="tablist">
          <button
            className="nav-link active text-success" 
            id="nav-home-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-home" 
            type="button" 
            role="tab" 
            aria-controls="nav-home" 
            aria-selected="true"
          >
            Overview
          </button>
          <button 
            className="nav-link text-success" 
            id="nav-profile-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-profile" 
            type="button" 
            role="tab" 
            aria-controls="nav-profile" 
            aria-selected="false"
          >
            Squad
          </button>
          <button
            className="nav-link text-success" 
            id="nav-contact-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-contact" 
            type="button" 
            ole="tab" 
            aria-controls="nav-contact" 
            aria-selected="false"
          >
            Fixtures
          </button>
          <button 
            className="nav-link text-success" 
            id="nav-home-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-home" 
            type="button" 
            role="tab" 
            aria-controls="nav-home" 
            aria-selected="true"
          >
            Stats
          </button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className={
              `d-flex tab-pane 
              fade ${show === '1' && 'show active'} p-4
              `
            }
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div  
              className='col-md-3 p-3' 
              style={{ borderRight: 20 }}
            >
              Ama
            </div>
            <div 
              className='col-md-9 m-2'
            >
              <div className='d-flex align-items-center border p-3'>
                <div className='col-md-7'>
                  <h3>Cheles Learn More</h3>
                  <p>
                  <p className="card-text">
                    The Club is called Cheles and its foundation is in Cheles.
                    Learn more about Cheles
                  </p>
                  <Link
                    className='text-success'
                  >
                    Cheles<BsArrowRight />
                  </Link>
                  </p>
                </div>
                <div className='col-md-4'>
                  <img src={images.AJP_0077} width={400} alt='' />
                </div>
              </div>
              <h3 className='pt-4'>Latest Club News</h3>
            </div>
          </div>
          <div
            className={
              `d-flex tab-pane 
              fade ${show === '2' && 'show active'} p-4
              `
            }
            id="nav-home" role="tabpanel"
            aria-labelledby="nav-home-tab"
            onClick={(item) => console.log({ item })}
          >
            <h1>Heading one</h1>
          </div>
          
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default FootballClub;
