import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { BsArrowRight } from 'react-icons/bs';
import { teams } from '../../db'


const FootballClubs = () => {
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
        <div className="d-flex justify-content-around row mb-2">
          {
            teams.map((club) => {
              return (
                <div key={club.name} className="col-md-3">
                  <div className="card mb-3">
                    <img
                      src={club.logo} 
                      className="card-img-top" 
                      alt="" 
                      height={150} 
                      width={300} 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{club.name}</h5>
                      <p className="card-text">
                        The Club is called {club.name} and its foundation is in {club.name}.
                        Learn more about {club.name}
                      </p>
                      <Link
                        className='text-success p-2'
                        to={`/football-clubs/${club.name}`}
                        state={club}
                      >
                        Club Profile <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FootballClubs;
