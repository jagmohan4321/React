import { useContext } from 'react'
import { ContextApi } from '../App'
import Card from '../components/Card'

function MyCard() {
  const { cardData } = useContext(ContextApi)

  return (
    <div className='BigContainer'>
      <div className='container'>
        {

          cardData?.length > 0 ? cardData?.map((item, index) => {
            return (<div key={index}>
              <Card data={item} count={item?.count}/>
            </div>)
          }) : (<div>No Card in My Card Page</div>)
        }
      </div>
    </div>
  )
}

export default MyCard
