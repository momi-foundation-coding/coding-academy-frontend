import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { BsArrowRight, BsSearch } from 'react-icons/bs';
import { clubs } from '../../mock'


const FootballClubs = () => {
  return (
    <div className=''>
      <Navbar />
      <div
        className='container-fluid mb-4 p-4'
      >
        <div className=' d-flex p-4 p-md-5 mb-4 rounded text-bg-success align-items-center'>
          <h1 className='pb-4'>Clubs</h1>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 align-items-center">
                <label for="newsletter1" className="visually-hidden">Search</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Search" />
                <BsSearch size={25} />
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-around row mb-2">
          {
            clubs.map((club, index) => {
              return (
                <div key={index} className="col-md-3">
                  <div class="card mb-3">
                    <img src={club.logo} class="card-img-top" alt="" height={150} width={300} />
                    <div class="card-body">
                      <h5 class="card-title">{club.name}</h5>
                      <p class="card-text">
                        The Club is called {club.name} and its foundation is in {club.name}.
                        Learn more about {club.name}
                      </p>
                      <Link className='text-success border p-1'>Club Profile <BsArrowRight /></Link>
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
