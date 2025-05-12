import Style from "./Style.css"
export default function PrintData({ name, setName }) {
    console.log(name);


    function changeName() {
        console.log("btn has clicked");
        setName("Raghav")

    }
    return (
        <div className="container"> <div className='card'>
            <p>{name}</p>
            <button onClick={changeName}>chnageName</button>
        </div></div>
    )
}
