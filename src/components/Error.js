import React from 'react'
import { useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();

  return (
    <div>
      <h1>Something Went Wrong!!! {error.data}</h1>
    </div>
  )
}

export default Error
