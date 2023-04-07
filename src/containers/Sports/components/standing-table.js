import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from 'react-icons/fa';
import { images } from '../../../assets';

const sampleImages = [images.AJP_0002, images.AJP_0106, images.AJP_0178, images.AJP_0285]

const SmallLogoIconImage = () => {
  return (
    <img
      src={sampleImages[Math.floor(Math.random() * sampleImages.length)]}
      alt='' 
      width={17} 
      height={17}  
      style={{ 
        marginRight: '2px',
        borderRadius: 50
      }} 
    />
  )
}

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
          <th scope="row">
            <SmallLogoIconImage />
            Cheles
          </th>
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
              color='43bdad'
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
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaMinusCircle
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row"><SmallLogoIconImage /> Kapsowar</th>
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
              color='43bdad'
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
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaMinusCircle
              color='grey'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row"><SmallLogoIconImage /> Kiplabai</th>
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
              color='43bdad'
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
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaMinusCircle
              color='grey'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
          </td>
        </tr>
        <tr>
          <th scope="row"><SmallLogoIconImage /> Kapchesewes</th>
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
              color='43bdad'
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
              color='43bdad'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaMinusCircle
              color='grey'
              style={{
                marginRight: '5px'
              }}
              size={18}
            />
            <FaCheckCircle
              color='43bdad'
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
