import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { teams } from '../../db';
import FootbalClubProfileCard from './card';


const FootballClubs = () => {
  // filter teams based on gender
  const [type, setType] = useState('male')
  let maleTeams = []
  let femaleTeams = []

  teams.find((team) => (
    team.type === 'male' 
    ? maleTeams.push(team) 
    : (team.type === 'female') 
    ? femaleTeams.push(team)
    : []
  ))

  return (
    <div className=''>
      <Navbar />
      <div
        className='container-fluid mb-4 p-4'
      >
        <div className=' d-flex p-4 p-md-5 mb-4 rounded text-bg-success align-items-center'>
          <h1 className='pb-4'>Football Clubs</h1>
          <div className="col-md-5 offset-md-1 mb-3">
            <p>
              Find various teams that are participating or will be participating 
              on Momi Foundation tournament and all its players.
            </p>
          </div>
        </div>
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
          <li className="nav-item pt-2" role="presentation">
            <div
              className={`nav-link ${type === 'male' ? 'active text-secondary' : 'text-black' }`}
              onClick={() => setType('male')}
              role="button"
            >
              Male Football Teams
            </div>
          </li>
          <li className="nav-item pt-2" role="presentation">
            <div
              className={`nav-link ${type === 'female' ? 'active text-secondary' : 'text-black' }`}
              onClick={() => setType('female')}
              role="button"
            >
              Female Football Teams
            </div>
          </li>
        </ul>
        <div className="d-flex justify-content-start row mb-2">
          {
            type === 'male' 
            ? 
              maleTeams.map(club => {
                return (
                  <FootbalClubProfileCard club={club} key={club.name} />
                )
              })
            :
            type === 'female'
            ? 
              femaleTeams.map(club => {
                return (
                  <FootbalClubProfileCard club={club} key={club.name}/>
                )
              })
            : <div></div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FootballClubs;
