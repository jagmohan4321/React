import React, { useContext } from 'react'
import { Mycontext } from '../App'

function Card({ data }) {
    // console.log(data)
    const { addToCard, increCount, decreCount, cardData } = useContext(Mycontext)
    const itemInCard = cardData?.find((item) => {
        return item?.id === data?.id
    })
    console.log(itemInCard)
    return (
        <div className="user-card">
            <h2>User Information</h2>
            <p><span>User Name:</span> {data?.username}</p>
            <p><span>Email:</span> {data?.email}</p>
            <p><span>Company Name:</span> {data?.company?.name}</p>
            <p><span>Street:</span> {data?.address?.street}</p>
            <p><span>City:</span> {data?.address?.city}</p>
            <p><span>Geo Lat:</span> {data?.address?.geo?.lat}</p>
            <p><span>Geo Lng:</span> {data?.address?.geo?.lng}</p>

            {!itemInCard ? (
                <button onClick={() => addToCard(data)}>Add to Cart</button>
            ) : (
                <div className="incDec">
                    <button onClick={() => decreCount(data)}>-</button>
                    <span>{data?.count}</span>
                    <button onClick={() => increCount(data)}>+</button>
                </div>
            )}
        </div>
    )
}

export default Card
