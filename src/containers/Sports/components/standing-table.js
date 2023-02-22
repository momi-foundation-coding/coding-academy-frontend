import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const StandingTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Club</th>
          <th scope="col">MP</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GF</th>
          <th scope="col">GA</th>
          <th scope="col">GD</th>
          <th scope="col">Points</th>
          <th scope="col">Last 5 Matches</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Cheles</th>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>20</td>
          <td>6</td>
          <td>14</td>
          <td>15</td>
          <td>
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='red'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='secondary'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Kapsowar</th>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>20</td>
          <td>6</td>
          <td>14</td>
          <td>15</td>
          <td>
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='red'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='secondary'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Kiplabai</th>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>20</td>
          <td>6</td>
          <td>14</td>
          <td>15</td>
          <td>
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='red'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='secondary'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Kapchesewes</th>
          <td>6</td>
          <td>5</td>
          <td>0</td>
          <td>1</td>
          <td>20</td>
          <td>6</td>
          <td>14</td>
          <td>15</td>
          <td>
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='red'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaTimesCircle
              color='secondary'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='green'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default StandingTable
