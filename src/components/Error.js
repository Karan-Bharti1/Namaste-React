import {useRouteError} from 'react-router-dom'

const Error = () => {
     const err=useRouteError()
     
  return (
    <div className="Error">
        <h1>OOPs! Something went Wrong ⚠️</h1>
  <h2>{err.status}: {err.statusText}</h2>
    </div>
  )
}

export default Error;