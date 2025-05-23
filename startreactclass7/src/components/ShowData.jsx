
import style from "./style.css"
function ShowData({ data }) {
    console.log("Inside Show Data", data)
    return (
        <div className="container">
            {/* conditional Rendering  */}
            {
                data ? (<div className="card" >
                    <img src={data?.message} alt="img-logo" />
                    <p>Status: {data?.status}</p>
                </div>) : (<div>Loading</div>)

            }

        </div>
    )
}

export default ShowData
