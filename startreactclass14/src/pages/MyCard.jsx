import React, { useContext } from 'react'
import { Mycontext } from '../App'
import Card from '../components/Card'

function MyCard() {
    const { cardData } = useContext(Mycontext)
    console.log(cardData)
    return (

        <div className="homeContainer">
            <div className="home">
                {
                    cardData?.length >= 1 ? (cardData?.map((item, index) => {
                        return (<div key={index}>
                            <Card data={item} />
                        </div>)
                    })) : (<div>No data found</div>)
                }

            </div>
        </div>


    )
}

export default MyCard
