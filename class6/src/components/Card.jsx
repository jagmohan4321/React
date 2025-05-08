import CardCss from "./CardCss.css";
export default function Card({ obj }) {
    return (
        <div className='mycard'>
            <p>{obj?.user?.id}</p>
            <p>{obj?.user?.name}</p>
            <p>{obj?.user?.contact?.email}</p>
            <p>{obj?.user?.contact?.phone}</p>
            <p>{obj?.user?.contact?.address.street}</p>
            <p>{obj?.user?.contact?.address.city}</p>
            <p>{obj?.user?.contact?.address?.country?.name}</p>
            <p>{obj?.user?.contact?.address?.country?.code} </p>
            <p>{obj?.user?.contact?.address?.country?.timezone} </p>
        </div>
    )
}
