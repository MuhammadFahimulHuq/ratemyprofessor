import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Popmessage = ({icon,title}) => {
const MySwal = withReactContent(Swal)
  return( 
     MySwal.fire({
      title: <p>{title}</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading()
      },
    })
  )
}

export default Popmessage;