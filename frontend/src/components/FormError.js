import React from 'react'
import {Form} from 'react-bootstrap'
const FormError = ({children}) => {
  return (
    <Form.Text className="text-danger" >
         {children}
        </Form.Text>
  )
}
export default FormError;