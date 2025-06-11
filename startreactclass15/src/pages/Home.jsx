import React, { useContext } from 'react'
import { ContextApi } from '../App'
import Card from "../components/Card.jsx"

import Style from "../components/Style.css"

function Home() {
  const { data } = useContext(ContextApi)
  // console.log("Home me data ", data)
  return (
   <div className='BigContainer'>
     <div className='container'>
      {

        data?.map((item, index) => {
          return (<div key={index}>
            <Card data={item} />
          </div>)
        })
      }
    </div>
   </div>
  )
}

export default Home
