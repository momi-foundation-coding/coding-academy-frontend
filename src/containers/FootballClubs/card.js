import React from 'react';
import { images } from '../../assets';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


const FootbalClubProfileCard = ({ club }) => {
  console.log(club)
  return (
    <div key={club.name} className="col-md-3">
      <div className="card mb-3">
        <img
          src={club.logo || images.DJI_0011} 
          className="card-img-top" 
          alt="" 
          height={150} 
          width={300} 
        />
        <div className="card-body">
          <h5 className="card-title text-secondary">{club.name}</h5>
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
}

export default FootbalClubProfileCard;
