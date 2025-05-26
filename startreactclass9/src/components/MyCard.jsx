import Card from "./Card.jsx"
function MyCard({ data }) {
  console.log("In my card", data)

  return (
    <div>
      {
        data?.length ? (<div>
          <div className="bigCard"> {
            data?.map((singleItem, index) => {
              return <div key={index}><Card data1={singleItem} /></div>
            })
          }
          </div>

        </div>) : (<div>No item in my cart</div>)
        

      }

    </div>
  )
}

export default MyCard
