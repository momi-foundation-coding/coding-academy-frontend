import React from 'react'
import { BsCode, BsBicycle, BsBook } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div class="container py-3 border-top mt-3">
      <h1 class="pb-2 d-flex justify-content-center text-primary">Our core features</h1>
      <p className='text-center'>We are made with the mind that youth and the community in general play an 
        essential part in the development of this country. 
      </p>
      <div class="d-flex justify-content-around">
        <div class="card mb-3 col-4 m-2 p-2 border border-white shadow">
          <div class="row g-0">
            <div class="col-md-4">
              <BsCode size={100} color="#43bdad" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="text-success text-capitalize font-weight-bold">Technology</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural 
                  lead-in to additional content. This content is a little bit longer.
                  This is a wider card with supporting 
                </p>
                <Link to="/software">
                  <button class="btn btn-outline-warning"><small class="">Learn More</small></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-4 m-2 p-2 border border-white shadow">
          <div class="row g-0">
            <div class="col-md-4">
              <BsBicycle size={100} color="#43bdad" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="text-success text-capitalize font-weight-bold">Sports</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <Link to="/sports">
                  <button class="btn btn-outline-warning"><small class="">Learn More</small></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-4 m-2 p-2 border border-white shadow">
          <div class="row g-0">
            <div class="col-md-4">
              <BsBook size={100} color="#43bdad" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="text-success text-capitalize font-weight-bold">Education</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <Link to="/software">
                  <button class="btn btn-outline-warning"><small class="">Learn More</small></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
