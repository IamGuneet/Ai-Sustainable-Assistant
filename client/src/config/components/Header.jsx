import React from 'react';
import './App.css';

function Header(props) {
  return (
    <div className='cartNav '>
      <div onClick={() => props.handleShow(false)} className='text-light cursor-pointer'>
       <a>
        ThriftStore  
       </a>
      </div>
      <div className=" b" >
           <a href='/logged/success'>
            DashBoard
           </a>
          </div>
      <div onClick={() => props.handleShow(true)} className='ml-auto cursor-pointer'>
       <a>
        Cart 
       </a>
        <sup className='badge badge-pill badge-info'>{props.count}</sup>
      </div>
    </div>
  );
}

export default Header;
