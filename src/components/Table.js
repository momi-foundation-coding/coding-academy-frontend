import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from 'react-icons/fa';
import { images } from '../assets';

const sampleImages = [images.AJP_0002, images.AJP_0106, images.AJP_0178, images.AJP_0285]


const winDrawLooseMap = {
  1: (<FaCheckCircle
    color='green'
    style={{
      marginRight: '5px'
    }}
    size={18}
  />),
  2: (<FaMinusCircle
    color='grey'
    style={{
      marginRight: '5px'
    }}
    size={18}
  />),
  3: (<FaTimesCircle
    color='red'
    style={{
      marginRight: '5px'
    }}
    size={18}
  />)
}



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
/**
 * Given a json data, i.e and array of objects
 * @returns  a table taking the keys of the objects as table headers and values as the rows
 */

const THead = ({ headers }) => (<thead><tr>{headers.map(header => (<th scope="col">{header.replaceAll('_', ' ')}</th>))}</tr></thead>);

const TBody = ({ data }) => (
  <tbody>
    {data.map(dta => (
      <tr>
        {Object.keys(dta).map(key => {
          switch (key) {
            case 'Club':
              return <th> <SmallLogoIconImage /> {dta[key]} </th>;
            case 'Last_5_Matches':
              return <td> {dta[key].map(match => winDrawLooseMap[match])}</td>;
            default:
              return (<td>{dta[key]}</td>);
          }
        })}
      </tr>))}
  </tbody>);

const Table = (props) => {
  const headers = Object.keys(props.data[0] || {});
  return (
    <table className="table">
      <THead headers={headers} />
      <TBody {...props} />
    </table>
  )

}

export default Table
