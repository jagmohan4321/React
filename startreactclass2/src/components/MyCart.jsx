import { Link } from 'react-router-dom';
import Style from "../components/Style.css"

function MyCart({ addCart }) {
  console.log("ye vala card add ho gya ", addCart);

  return (
    <div>

      {

        addCart.length!==0 ? (addCart?.map((item, index) => {
          return (
            <div className="singleCard" key={index}>
              <p>id:: {item?.id}</p>
              <p>cityname: {item?.cityname}</p>
              <p>cityinfo: {item?.cityinfo}</p>
              <p>livingPrice: {item?.livingPrice}</p>

            </div>)
        })) :
          (<div className='nofound'><h1>there is no item in cart</h1></div>)
      }


      <Link to="/"> <button className='btn'>Go to My Home</button>
      </Link>

    </div>
  )
}

export default MyCart
