import React from 'react'
import { BsCode, BsBicycle, BsBook } from "react-icons/bs";

const Featured = () => {
  return (
    <div class="container py-3 border-top border-2 mt-3">
      <h1 class="pb-2 d-flex justify-content-center text-decoration-underline">Featured Programs</h1>
      <div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <BsCode size={40} color="green"/>
          </div>
          <div>
            <h3 class="fs-2">Software Development</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <BsBicycle size={40} color="green" />
          </div>
          <div>
            <h3 class="fs-2">Sports</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <BsBook size={40} color="green" />
          </div>
          <div>
            <h3 class="fs-2">Education</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
