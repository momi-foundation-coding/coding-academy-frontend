import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { images } from '../../assets';
import Players from './players';
import moment from 'moment';
import Fixtures from './fixtures';


const fixtures = [
  {
    date: moment('2023-04-25').format('DD-MM-YYYY'),
    field: 'Sinon, Kapsowar',
    opponent: 'Kapchesewes' 
  },
  {
    date: moment('2023-04-25').format('DD-MM-YYYY'),
    field: 'Moi Girls Kapsowar, Kapsowar',
    opponent: 'Kapsowar' 
  },
  {
    date: moment('2023-04-25').format('DD-MM-YYYY'),
    field: 'Chepkuta, Kapsowar',
    opponent: 'Chelaite' 
  }
]

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
  const [tab, setTab] = useState('players')

  const handleSetTab = (item) => {
    setTab(item)
  }
  
  console.log(players)

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
            className={`nav-link text-success ${tab == 'players' ? 'active' : ''}`}
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
            className={`nav-link text-success ${tab == 'fixtures' ? 'active' : ''}`}
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
              tab == 'players' ?
                <Players players={players}/>
              : 
              tab == 'fixtures' ?
                <Fixtures fixtures={fixtures} currentTeam={"Cheles"} />
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
