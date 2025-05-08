import CardCss from "./CardCss.css"
export default function ArrayCard({ arr }) {
    return (
        <div className="array">
            <p>{arr[0]}</p>
            <p>{arr[1]}</p>
            <p>{arr[2]}</p>
            <p>{arr[3]}</p>
            <p>{arr[4]}</p>
        </div>
    )
}
