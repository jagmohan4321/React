import Card from "./Card.jsx"
import { Link } from "react-router-dom"
function MyCard({ data,setMycardData }) {
  console.log("In my card", data)
    const cardData=JSON.parse(localStorage.getItem('cardData'));
    console.log("data1 in my cart Localstorage ",data)


  return (
    <div>
      {
        cardData?.length ? (<div>
          <div className="bigCard"> {
            cardData?.map((singleItem, index) => {
              return <div key={index}><Card data1={singleItem} setMycardData={setMycardData} cardData={data} /></div>
            })
          }
          </div>

        </div>) : (<div>

          <p>No item in my cart</p>
         <Link to="/">  <button>Go to home</button></Link>
        </div>)
        

      }

    </div>
  )
}

export default MyCard
