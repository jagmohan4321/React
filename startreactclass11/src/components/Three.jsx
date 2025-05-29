import { useContext } from "react"
import { MyContext } from "../App.js";

function Three() {
    //step-4 use context ya consume context 
    const study = useContext(MyContext)
    console.log(study)
    return (
        <div>
            <h1>{`Three vala component=${study}`} </h1>

        </div>
    )
}

export default Three
