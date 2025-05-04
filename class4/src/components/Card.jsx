import React from 'react'

export function Card({ result, setResult }) {
    // setResult("fail")

    function changeStatus(){
        setResult("fail")
    }
    return (
        <>
            <div>The status of student in 7th sem is  {`=> ${result}`}  inside Card. </div>
            <button onClick={changeStatus}> change Result</button>
        </>
    )
}
