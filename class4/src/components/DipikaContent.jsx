import React from 'react'

export default function DipikaContent({ content, setContent }) {
    console.log("Dipika file me content mera abhi value ye hai=>", content);

    return (
        <>
            {/* conditional rending */}
            <div>
                {

                    content ? (<div><b>Dipika</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt aperiam, aspernatur expedita facere consectetur voluptate
                        ipsum ea eaque facilis nulla a, nihil libero modi
                        laboriosam mollitia laudantium explicabo nostrum, atque quis.
                        Dolor et enim sit fugit, iusto eligendi consequatur illum?
                    </div>) :
                        (<><button onClick={() => {
                            setContent(false)
                        }} style={{color: "orange"}}>Show Dipika</button></>)

                }

            </div>
        </>

    )

}
