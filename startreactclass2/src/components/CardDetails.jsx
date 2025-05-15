
import Style from "../components/Style.css"
function CardDetails({ item,addCart, setAddCart }) {

    function addToCart(item) {
        console.log("single data me object aa rha hai ",item);
        console.log(addCart);
        const pahleValaData = [...addCart];
        pahleValaData.push({...item})
        console.log("new array me data",pahleValaData);
        setAddCart(pahleValaData)
    }

    return (
        <div className="singleCard">
            <p>id:: {item?.id}</p>
            <p>cityname: {item?.cityname}</p>
            <p>cityinfo: {item?.cityinfo}</p>
            <p>livingPrice: {item?.livingPrice}</p>
            <button className='btn' onClick={() => {
                addToCart(item)
            }}>add to cart</button>
        </div>
    )
}

export default CardDetails
