
function PrintData({ data, setNumber, num }) {

    return (
        <div>
            <h1>Number value {num}</h1>


            {
                data ? (<h1>This is Coming={data?.title}</h1>) : (<h1>Fetching Data</h1>)
            }

            <button onClick=
                {() => setNumber((num => num + 1))
                }>clickTOIncrease</button>
        </div>
    )
}

export default PrintData
