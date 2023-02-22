import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { UpcomingEvents, StandingTable } from './components'
import { Link } from 'react-router-dom';

const groups = ['Group A', 'Group B', 'Group C', 'Group D']

const SportsScreen = () => {
  return (
    <div className=''>
      <Navbar />
      <main className='container'>
        <div className="p-4 p-md-5 mb-4 rounded text-bg-success">
          <div className="col-md-6 px-0">
            <h1 className="display-6 fst-italic">Momi Foundation Football League - April 2023</h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers quickly and efficiently 
              about whats most interesting in this pos contents.
            </p>
            <button className='btn btn-light text-success'>Check Now</button>
          </div>
        </div>
        <UpcomingEvents />
        <div className="row g-5">
          <div className="col-md-8">
            <h1 className='underline'>Momi Footbal League Table</h1>
            {
              groups.map((group, index) => {
                return (
                  <div className='pt-2' key={index}>
                    <h5 className='text-bold'>{group}</h5>
                    <StandingTable />
                  </div>
                )
              })
            }
          </div>
          <div className="col-md-4">
            <div className="position-sticky pt-4">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>
              <div className="p-4">
                <h4 className="fst-italic">Featured Teams</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <Link className='text-success'>Kapchesewes</Link>
                  </li>
                  <li>
                    <Link className='text-success'>Kasubwo</Link>
                  </li>
                  <li>
                    <Link className='text-success'>Hossen</Link>
                  </li>
                  <li>
                    <Link className='text-success'>Kabarar</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SportsScreen;
