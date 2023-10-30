import React from 'react'

export default function Client({name, Gst, Billn, Dcn}) {
  return (
    <>
      <ul>
      <li><span> Name : </span>{name}</li>
      <li><span> GSt number:</span>{Gst}</li> 
      <li> <span> Bill number:</span>{Billn}</li>
      <li> <span> Dc number:</span>{Dcn}</li>
    </ul>
    
    </>
  )
}
