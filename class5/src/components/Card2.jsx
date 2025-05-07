
import "./Card2.css"
export default function ({ three }) {
    console.log(JSON.stringify(three, null, 2));

    return (
        <div className='Card2'>
            <p>{three?.userId}</p>
            <p>{three.age}</p>
            <p>{three.two.profile}</p>
            <p>{three.two.three.kaam}</p>
            <p>{three.two.three.name}</p>
        </div>
    )
}
