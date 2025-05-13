
// export default function Card({ CityData }) {
//     console.log("inside card component",CityData);

//     return (
//         <div>
//             <div>
//                 <p>this is card</p>
//                 <p>{CityData?.id}</p>
//                 <p>{CityData?.cityname}</p>
//                 <p>{CityData?.cityinfo}</p>
//                 <p>{CityData?.livingPrice}</p>
//             </div>
//         </div>
//     )
// }


import './Card.css';
import { Link } from 'react-router-dom';
export default function Card({ CityData,setCardData }) {
    console.log("inside card component", CityData);

    function addItem(item){
        setCardData(item)
    }

    return (
        <div>
            {
                CityData?.map((CityData, index) => {
                    return (<div className='card' key={index}>
                        <p>{CityData?.id}</p>
                        <p>{CityData?.cityname}</p>
                        <p>{CityData?.livingPrice}</p>
                        <p>{CityData?.cityinfo}</p>
                        <button onClick={addItem(CityData)}>Add to Card</button>
                    </div>)
                })

            }
            <Link to="/card"><button>Go to Card</button></Link>



        </div>
    );
}
