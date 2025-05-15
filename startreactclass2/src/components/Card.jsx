import CardDetails from './CardDetails';
import Style from "../components/Style.css"
import { Link } from 'react-router-dom';
export default function Card({ data, setAddCart,addCart }) {
    console.log("card component ke andar ", data);

    return (
        <div>
            <div className='Container'>

                {
                    data?.map((item, index) => {
                        return <div key={index} ><CardDetails item={item} setAddCart={setAddCart} addCart={addCart}/></div>
                    })
                }
                {/* this button use to go in my cart components */}
            </div>
            <Link to="/cart"> <button className='btn'>Go to My Cart</button>
            </Link>
        </div>
    )
}
