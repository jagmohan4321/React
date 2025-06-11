import { useContext } from "react"
import  "./Style.css"
import { ContextApi } from "../App"
function Card({ data }) {
  const { addToCardItem, cardData, increMent, decreMent } = useContext(ContextApi)


  // const alreadyInCart = cardData.some((item) => item?.id === data.id)
  const alreadyInCart = cardData?.find((item) => item?.id === data?.id)
  return (
    <div className="user-card">
      <h2>User Information</h2>
      <p>
        <span>User Name:</span> {data?.username}
      </p>
      <p>
        <span>Email:</span> {data?.email}
      </p>
      <p>
        <span>Company Name:</span> {data?.company?.name}
      </p>
      <p>
        <span>Street:</span> {data?.address?.street}
      </p>
      <p>
        <span>City:</span> {data?.address?.city}
      </p>
      <p>
        <span>Geo Lat:</span> {data?.address?.geo?.lat}
      </p>
      <p>
        <span>Geo Lng:</span> {data?.address?.geo?.lng}
      </p>
      {
        alreadyInCart ? (<div className="increDcre">
          <p onClick={() => {
            decreMent(data?.id)
          }} className="inBtn">-</p>
          <p>{alreadyInCart?.count}</p>
          <p onClick={() => {
            increMent(data?.id)

          }} className="inBtn">+</p>
        </div>) :
          (<button onClick={() =>
            addToCardItem(data)
          }>Add to card</button>)
      }
    </div>

  )
}

export default Card
