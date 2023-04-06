import React from 'react'
import { images } from '../../assets';


const assets = [
  images.AJP_0002, images.AJP_0003, images.AJP_0004,
  images.AJP_0009, images.AJP_0068, images.AJP_0077,
  images.AJP_0106, images.AJP_0178, images.AJP_0190,
  images.AJP_0270, images.AJP_0270, images.DJI_0003,
  images.DJI_0011, images.elders, images.youth
]

const CarouselItem = ({ images }) => {
  return (
    <div class="carousel-item">
      <div class="row">
        {
          images.map((image, index) => {
            return (
              <div class="col-md-4 mb-3" key={`${index}`}>
                <div class="card">
                  <img src={image} class="d-block w-100" alt="..." />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Gallery = () => {

  // divide images into group of 3
  const imagesInGroups = assets.reduce((r, e, i) => 
    (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r, []
  )

  return (
    <div class="container py-3 border-top border-2 mt-3">
    <div class="row">
      <h1 class="pb-2 d-flex justify-content-center text-success">Gallery</h1>
      <div class="col-12">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner active">
            <div class="carousel-item active">
              <div class="row">
                {
                  imagesInGroups[0].map((image, index) => {
                    return (
                      <div class="col-md-4 mb-3" key={`${index}`}>
                        <div class="card">
                          <img src={image} class="d-block w-100" alt="..." />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            {
              imagesInGroups.map((group, index) => {
                return (
                  <CarouselItem images={group} index={index}/>
                )
              })
            }
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gallery
