import "./Card1.css"
export default function Card1({ two }) {
    // console.log("the value come from app.js of 2nd level object")
    // console.log(two);

    // print nested object in structure way
//     console.log(JSON.stringify(two, null, 2));
// console.log(two.completed);


    return (
        <div className="Card1">
            <p>{two.id}</p>
            <p id="com">{two.completed}</p>
            <p>{two.two.userId}</p>
            <p>{two.two.title}</p>
        </div>
    )
}
