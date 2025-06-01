import { useContext } from "react"
import { sirGContext } from "../App"
function Goutam() {

    // jo value context ke andar hai  use use kar lo
    const {name, mobile, printOrganizationName, guidedBy, arr } = useContext(sirGContext)


    return (
        <div>
            <h1>Goutam Das</h1>
            <p>{guidedBy}</p>
            <p>{arr[0]}</p>
            <p>{name}</p>
            <p>{mobile}</p>
            <button onClick={() => {
                printOrganizationName()
            }}> click me </button>

        </div>
    )
}

export default Goutam
