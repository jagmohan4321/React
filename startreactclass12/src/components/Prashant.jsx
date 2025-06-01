import Goutam from './Goutam'
import { useContext } from 'react'
import { sirGContext } from '../App'
function Prashant() {
  // const guidedBy=useContext(sirGContext)
  const { name, mobile, printOrganizationName, guidedBy, arr } = useContext(sirGContext)


  return (
    <div>
      {/* <h1>Prashant {guidedBy} se padhkar, Goutam ko padha rha hai</h1> */}
      {/* <h1>Prashant Das</h1>
      <Goutam /> */}


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
