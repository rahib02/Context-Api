import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react';
import axios from 'axios'
import './Navbar.css'
import { Context } from '../../Context/Favoriteproduct';


function Navbar() {
  const { setdatas } = useContext(Context);
  const { count } = useContext(Context);
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setdatas(res.data));
  }, []);
  return (
    <div className='navbar'>
      <div className='navbar_link'>
        <ul className='navbar_ul'>
          <li className='navbar_li'><Link to={"/"}>Home</Link></li>
          <li className='navbar_li navbar_li2' ><Link to={"favourite"}>Favorite</Link></li>
          <span className='fav_count'>{count}</span>
        </ul>
      </div>
    </div>
  )
}

export default Navbar