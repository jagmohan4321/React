import { Link } from 'react-router-dom';

export default function CardItemsData({cardData}) {
  console.log("card me item",cardData);
  
  return (
   <>
   <h1>this is a cardItem</h1>
   <Link to="/"><button>Back to Home</button></Link>

   </>
  )
}
