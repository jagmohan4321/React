import { useContext } from "react"
import Card from "../components/Card"
import { Mycontext } from "../App"

function Home() {
    const { data } = useContext(Mycontext)
    console.log(data)
    return (
        <div className="homeContainer">
            <div className="home">
                {
                    data?.length >= 1 ? (data?.map((item, index) => {
                        return (<div key={index}>
                            <Card data={item} />
                        </div>)
                    })) : (<div>No data found</div>)
                }

            </div>
        </div>
    )
}

export default Home
