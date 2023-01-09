import React from 'react'
import { useContext } from 'react';
import { Context } from '../../Context/Favoriteproduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillStar } from 'react-icons/ai';
import './Home.css';


function Home() {
  const { datas } = useContext(Context);
  const { fav, setfav } = useContext(Context);
  const { setcount } = useContext(Context);
  const favadd = (ids) => {
    let w = 0;
    fav.map((x) => (
      x.map((y) => {
        if (y.id === ids) {
          w += 1
        }
      })))
    if (w === 0) {
      const product = datas.filter(Element => Element.id === ids)
      setfav([...fav, product])
      setcount(fav.length + 1)
    }
    else {
      alert("Bu esya artiq eleve olunub")
    }


  }
  return (
    <TableContainer component={Paper} id='TableContainer'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Quantity</TableCell>
            <TableCell align='right'>Favourite add </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell align='right'>{row.unitPrice}</TableCell>
              <TableCell align='right'>{row.quantityPerUnit}</TableCell>
              <TableCell align='right'><button onClick={() => favadd(row.id)} className='btn'>< AiFillStar className='star' /></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home