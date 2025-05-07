import "./Card.css";
function Card({ obj }) {
    // console.log("object is coming from app.js file", obj);
    // console.log(obj.description);
    // console.log(obj['img']);
console.log(obj.completed);


    return (
        <>
            <div className='Card'>
                <p>{obj.description}</p>
                <p>{obj.id}</p>
                <p>{obj['title']}</p>
                {/* <p>{obj.img}</p> */}
                <p>{obj.completed}</p>
                <img src={obj.img} alt="bgimg" width={100}/>

            </div>
        </>
    )
}

export default Card;
