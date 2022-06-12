import React from 'react';
import '../App.css'

function Hello(props) {
    const someStyle = {backgroundColor : "yellow"}
    return(
      <>
        <h1 style={someStyle} className='one'>Hello world</h1>
        <h1 style={{backgroundColor:"black", color:"white"}}>Hello world</h1>
        <h1>hello {props.name}!</h1>
      </>
    )
  }

export default Hello;