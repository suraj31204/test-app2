
import React from 'react'

export default function Profile(info) {
  return (
    <div>
        <img 
         src = "https://i.imgur.com/MK3eW3As.jpg"
         alt="Suraj Mane"
         /> <br/>
         
         <h>{info.name}</h>
    </div>
  )
}





