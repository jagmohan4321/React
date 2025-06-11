import { useContext } from 'react'
import { sirGContext } from "../contextApi/context.js"
function Prashant() {
  const { name, mobile, printOrganizationName, guidedBy, arr } = useContext(sirGContext)


  return (
    <div>
      <div>
        <h1>Prashant Das</h1>
        <p>{guidedBy}</p>
        <p>{arr[0]}</p>
        <p>{name}</p>
        <p>{mobile}</p>
        <button onClick={() => {
          printOrganizationName()
        }}> click me </button>
      </div>
    </div>
  )
}

export default Prashant
