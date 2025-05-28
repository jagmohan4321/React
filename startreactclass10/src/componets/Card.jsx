import style from "./style.css"
function Card({ data1, setMycardData, cardData }) {
    function AddToCardInMyCart(item) {

        setMycardData((phaleValaData) => {


            const itemAlredyinCart = phaleValaData?.some((it) => it?._id === item?._id);
            if (itemAlredyinCart) {
                localStorage.setItem("data", JSON.stringify(phaleValaData));

                alert("me already mycard me add hu")
                return phaleValaData;
            }
            localStorage.setItem("cardData", JSON.stringify([...phaleValaData, item]));
            return [...phaleValaData, item]



        })
    }

    const alreadyInCart = cardData?.some((it) => it?._id === data1?._id);
    console.log("already card me hai kya ", alreadyInCart)

    function removeFromMyCart(id) {
        console.log("remove", id)
        console.log(cardData)
        let filterData = cardData?.filter((item) => item._id !== id);
        // how to remove item from the local storage 
        setMycardData(filterData)

    }
    return (
        <div className='card'>
            <p>id:{data1?._id}</p>
            <p>Status:{data1?.Status}</p>
            <p>Title:{data1?.Title}</p>
            <div>
                {
                    alreadyInCart ? (<div><button onClick={() => {
                        removeFromMyCart(data1?._id)
                    }}>Remove from code
                    </button></div>) : (<div><button onClick={
                        () => {
                            AddToCardInMyCart(data1)
                        }
                    }>Add to cart
                    </button></div>)
                }

            </div >
        </div >
    )
}

export default Card


