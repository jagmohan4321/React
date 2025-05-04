import React from 'react'

export default function RitikaContent({ content, setContent }) {
    console.log(" Ritika file content mera abhi value ye hai=>", content);


    return (

        <div>{

            content ? (<div><b>Ritika</b> Ritika Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt aperiam, aspernatur expedita facere consectetur voluptate
                ipsum ea eaque facilis nulla a, nihil libero modi
                laboriosam mollitia laudantium explicabo nostrum, atque quis.
                Dolor et enim sit fugit, iusto eligendi consequatur illum?
            </div>) : (<><button onClick={() => {
                setContent(!content)
            }} style={{ color: "red" }}>Show Ritika</button></>)

        }
        </div>
    )
}
