import Card from "./Card.jsx"
import Loader from "./Loader"
import style from "./style.css"
function Home({ data, setMycardData,cardData }) {
  console.log("Inside Home", data?.length)
  return (
    <div>

      {
        data?.length ? (<div>
          <div className="bigCard"> {
            data?.map((singleItem, index) => {
              return <div key={index}><Card data1={singleItem} setMycardData={setMycardData} cardData={cardData} /></div>
            })
          }
          </div>

        </div>) : (
          <div> <Loader /></div>)

      }


    </div>
  )
}

export default Home
