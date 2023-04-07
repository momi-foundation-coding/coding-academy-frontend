import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { images } from '../../assets';
import Players from './players';
import Fixtures from './fixtures';
import { useLocation } from 'react-router-dom';


const FootballClub = () => {
  const [tab, setTab] = useState('players')

  const handleSetTab = (item) => {
    setTab(item)
  }

  const location = useLocation();
  const data = location.state;

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
          <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        </div>
        <nav>
        <div className="nav nav-tabs" id="myTab" role="tablist">
          <button 
            className={`nav-link text-success ${tab === 'players' ? 'active' : ''}`}
            id="nav-profile-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-profile" 
            type="button" 
            role="tab" 
            aria-controls="nav-profile" 
            aria-selected="false"
            onClick={() => handleSetTab("players")}
          >
            Squad
          </button>
          <button
            className={`nav-link text-success ${tab === 'fixtures' ? 'active' : ''}`}
            id="nav-contact-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#nav-contact" 
            type="button" 
            role="tab"
            onClick={() => handleSetTab("fixtures")}
            aria-controls="nav-contact" 
            aria-selected="false"
          >
            Fixtures
          </button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`d-flex tab-pane fade show active p-4`}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {
              tab === 'players' ?
                <Players players={data.squad}/>
              : 
              tab === 'fixtures' ?
                <Fixtures fixtures={data.fixtures} currentTeam={data.name} />
              :
              <div></div>
            }
          </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default FootballClub;
