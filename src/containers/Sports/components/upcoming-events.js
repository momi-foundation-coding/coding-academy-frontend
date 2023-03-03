import React from 'react'
import { images } from '../../../assets';
import Button from '../../../components/Button';


const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      name: 'Momi Football Tournament',
      category: 'Football Tournament',
      date: 'April 2023',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: {
        src: images.AJP_0004,
        alt: 'footbal'
      }

    },
    {
      name: 'Momi Marathon - December 2023',
      category: 'Post title',
      date: 'Nov 11',
      description: `This is a wider card with supporting text below as a natural
      lead-in to additional content.`, image: {
        src: images.AJP_0270,
        alt: 'footbal'
      }

    },
    {
      name: 'Momi Football Tournament',
      category: 'Football Tournament',
      date: 'April 2023',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: {
        src: images.AJP_0178,
        alt: 'footbal'
      }

    },
    {
      name: 'Momi Football Tournament',
      category: 'Football Tournament',
      date: 'April 2023',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: {
        src: images.AJP_0285,
        alt: 'footbal'
      }

    },
  ];
  return (
    <div className="row mb-2">
      <h1 className='text-center pt-4 pb-4'>Upcoming Tournaments</h1>
      {upcomingEvents.map(event => (
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">{event.name}</strong>
              <h3 className="mb-0">{event.category}</h3>
              <div className="mb-1 text-muted">{event.date}</div>
              <p className="card-text mb-auto">{event.description}</p>
              <Button btnType="success" >Check More Details</Button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={event.image.src} alt={event.image.alt} width="200" height="250" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingEvents
