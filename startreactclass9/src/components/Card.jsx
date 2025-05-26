import style from "./style.css"
function Card({ data1, setMycardData, cardData }) {
  function AddToCardInMyCart(item) {

    setMycardData((phaleValaData) => {

      //agar mera item card me hai to me ek alert msg de dunga ki ye item already mera card me hai
      // return [...phaleValaData, item]
      //phle check kar lo ki item card me to nhi hai agar hai to bolo ki card me pahle se hai
      // const itemAlredyinCart = phaleValaData?.some((it) => {
      //   if (it?._id === item?._id) {
      //     return true
      //   }
      // })

      const itemAlredyinCart = phaleValaData?.some((it) => it?._id === item?._id);
      if (itemAlredyinCart) {
        alert("me already mycard me add hu")
        return phaleValaData;
      }
      //  cardData?.some((i) =>  i._id === item._id);
      return [...phaleValaData, item]


      //find method ka use aap kar lena me some method use karta hu 


    })
  }


  // function removeFromMyCart(id) {
  //   console.log("remove", id)
  //   console.log(cardData)
  //   let filterData = cardData?.filter((item) => item._id !== id);
  //   console.log(filterData)
  //   // setMycardData()
  // }
  return (
    <div className='card'>
      <p>id:{data1?._id}</p>
      <p>Status:{data1?.Status}</p>
      <p>Title:{data1?.Title}</p>
      <div>
        <button onClick={
          () => {
            AddToCardInMyCart(data1)
          }
        }>Add to cart
        </button>

      </div >
    </div >
  )
}

export default Card
