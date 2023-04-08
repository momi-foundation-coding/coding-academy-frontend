import React from "react";
import { images } from '../../assets';
import moment from "moment";


const Players = ({ players }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {
        players && players.map((player, index) => {
          const age =  moment().diff(player.DOB, 'years');
          return (
            <div  
              className='col'
              key={player.name + index}
            >
              <div className="card border border-warning">
                <div className='d-flex justify-content-between p-2 border-bottom bg-light'>
                  <div className=''>
                    <p className='lh-1'>{player.number}</p>
                    <p className='lh-1'>{player.name}</p>
                    <p className='lh-1'>{player.position}</p>
                    <p className='lh-1'>{age} Years</p>
                  </div>
                  <img
                    src={player.profilePicture || images.avatar}
                    width={80}
                    height={80}
                    className="rounded-circle"
                    alt={`Player ${player.name}`}
                  />
                </div>
                <div className="card-body">
                  <p className='lh-1'>Apperances: {player.apperances}</p>
                  <p className='lh-1'>Cleansheets: {player.cleansheets}</p>
                  <p className='lh-1'>Goals: {player.goals} </p>
                  <p className='lh-1'>Assists: {player.assists}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Players;
