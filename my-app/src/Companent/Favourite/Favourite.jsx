import React from 'react'
import {useContext} from 'react';
import { Context } from '../../Context/Favoriteproduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineStar } from 'react-icons/ai';

function Favourite() {
      const {fav,setfav} = useContext(Context);
      const {count,setcount} = useContext(Context);
      let favproduct=[];
      const favdelte=(ids)=>{
        let mincount=0
        favproduct=[];
        fav.map((x)=>(
          x.map((y)=>{
    
            if(y.id!==ids){
            favproduct.push([y]);

            }
            else{
              mincount+=1
            }
      }
      )));
      setcount(count-mincount)
      setfav([])
      setfav(favproduct)  
      }  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Quantity</TableCell>
            <TableCell align='right'>Favourite add </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fav.map((elem) =>(
            elem.map((eleme)=>(
            <TableRow
              key={eleme.id}
            >
              <TableCell>{eleme.name}</TableCell>
              <TableCell align='right'>{eleme.unitPrice}</TableCell>
              <TableCell align='right'>{eleme.quantityPerUnit}</TableCell>
              <TableCell align='right'><button  className='btn'onClick={()=>favdelte(eleme.id)}><AiOutlineStar className='star'/></button></TableCell>
            </TableRow>
            )))
         )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Favourite
