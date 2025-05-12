
export default function Card({ student }) {
    return (
        <div className="container">
            <div className='card'>
                <p>{student?.id }</p>
                <p>{student?.name }</p>
                <p>{student?.age}</p>
            </div></div>
    )
}
