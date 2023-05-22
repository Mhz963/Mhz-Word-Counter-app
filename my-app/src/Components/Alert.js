import React from 'react'

export default function Alert(props) {



  return (

    props.alrt && <div class= {`alert alert-${props.alrt.typ} alert-dismissible fade show`} role="alert">
      <strong>{props.alrt.msg}</strong> 
      
    </div>

  )
}
