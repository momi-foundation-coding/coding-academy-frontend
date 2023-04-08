import React from "react";


const Fixtures = ({ fixtures, currentTeam }) => {
  return (
    <div className="w-100 d-flex flex-column">
      {
        fixtures && fixtures.length > 0 ? fixtures.map(fixture => {
          return (
            <div className='m-2 border p-2' key={fixture.date}>
              <div class="d-flex flex-column">
                  <h5 class="">{fixture.date}</h5>
                <div className="d-flex justify-content-evenly">
                  <p>{currentTeam} vs {fixture.opponent}</p>
                  <p className="w-30">Ground: {fixture.field}</p>
                </div>
              </div>
            </div>
          )
        })
        : 
        <div>
          <p className="text-secondary">{currentTeam} does not have any fixtures at the moment</p>
        </div>
      }
    </div>
  )
}

export default Fixtures;
