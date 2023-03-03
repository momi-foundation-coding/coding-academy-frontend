import React from 'react';
import Table from '../../../components/Table';

const data = [
  {
    Club: 'Cheles',
    MP: 6,
    W: 5,
    D: 0,
    L: 1,
    GF: 20,
    GA: 6,
    GD: 14,
    Points: 15,
    Last_5_Matches: [1, 2, 3, 2, 1],
  },
  {
    Club: 'Kapsowar',
    MP: 6,
    W: 5,
    D: 0,
    L: 1,
    GF: 20,
    GA: 6,
    GD: 14,
    Points: 15,
    Last_5_Matches: [1, 2, 3, 2, 1],
  },
  {
    Club: 'Kiplabai',
    MP: 6,
    W: 5,
    D: 0,
    L: 1,
    GF: 20,
    GA: 6,
    GD: 14,
    Points: 15,
    Last_5_Matches: [1, 2, 3, 2, 1],
  },
  {
    Club: 'Kapchesewes',
    MP: 6,
    W: 5,
    D: 0,
    L: 1,
    GF: 20,
    GA: 6,
    GD: 14,
    Points: 15,
    Last_5_Matches: [1, 2, 3, 2, 1],
  },
];


const StandingTable = () => {
  return (
    <Table data={data} />
  )
}

export default StandingTable
