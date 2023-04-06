import React from "react";
import { images } from '../../assets';
import moment from "moment";


const Players = ({ players }) => {
  return (
    <div className="d-flex flex-row">
      {
        players.map(player => {
          const dateOfBirth = moment("1996-03-25").format('DD-MM-YYYY')
          const age =  moment().diff('1996-03-25', 'years');
          return (
            <div  
              className='col-md-3 p-3'
              key={player.name}
            >
              <div class="card">
                <img class="card-img-top" src={images.AJP_0077} alt={`Player ${player.name}`} />
                <div class="card-body">
                  <h5 class="card-title">{player.name}</h5>
                  <p>Position: {player.position}</p>
                  <p>D.O.B: {`${dateOfBirth}`}</p>
                  <p>Age: {`${age}`}</p>
                  <p>Height: 168m</p>
                  <hr />
                  <p>Apperances: 20</p>
                  <p>Cleansheets: 0</p>
                  <p>Goals: 20</p>
                  <p>Assists: 6</p>
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
