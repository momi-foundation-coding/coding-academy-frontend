import React from 'react'
import { images } from '../../../assets';


const UpcomingEvents = () => {
  return (
    <div className="row mb-2">
      <h1 className='text-center pt-4 pb-4'>Upcoming Tournaments</h1>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Momi Football Tournament</strong>
            <h3 className="mb-0">Football Tournament</h3>
            <div className="mb-1 text-muted">April 2023</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-success col-md-6">Check More Details</button>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={images.AJP_0004} alt='footbal' width="200" height="250" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Momi Marathon - December 2023</strong>
            <h3 className="mb-0">Post title</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural 
              lead-in to additional content.
            </p>
            <button className="btn btn-success col-md-6">Check More Details</button>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="bd-placeholder-img" width="200" height="250">
              <img src={images.AJP_0270} alt='footbal' width="200" height="250" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Momi Football Tournament</strong>
            <h3 className="mb-0">Football Tournament</h3>
            <div className="mb-1 text-muted">April 2023</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-success col-md-6">Check More Details</button>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={images.AJP_0178} alt='footbal' width="200" height="250" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Momi Football Tournament</strong>
            <h3 className="mb-0">Football Tournament</h3>
            <div className="mb-1 text-muted">April 2023</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-success col-md-6">Check More Details</button>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={images.AJP_0285} alt='footbal' width="200" height="250" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
