import { useState } from "react"
import FormCss from "./FormCss.css"
function Form() {
    // const [fname, setFname] = useState("RAM")
    // const [lname, setLname] = useState("syam")
    // const [email, setEmail] = useState("abc@gmail.com")
    // const [password, setPassword] = useState("RAM")

    // function formData(event) {
    //     event.preventDefault();
    //     console.log(fname, lname, email, password)
    // }

    // function fixLastNameValue(event) {
    //     setLname(event.target.value);
    // }

    // basically react form uncontrolled hote hai




    // ye hoti hai good practice 
    const [formValaData, setFormValaData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""

    })

    // normal way when you have any value inside input feild
    // function formKiValue(event){
    //     event.preventDefault();
    //     console.log(formValaData)
    // }

    // when your form dont have any value inside input box


    function formVALEObjectmeValueDalRheHai(event) {
        setFormValaData((pahleValaData) => {
            return {
                ...pahleValaData, [event.target.name]: event.target.value
            }
        })
    }

    function formKiValue1koPrintKarega(event) {
        event.preventDefault();
        // this is not a valid way 
        console.log("me es data ka use api calling me karunga", formValaData);

        


    }
console.log(formValaData)


    return (
        <div>
            {/* <form onSubmit={formData}>
                <div className="formContainer">
                    <div className="box">
                        <label htmlFor="fname" >First Name</label>
                        <input type="text" id="fname" placeholder="enter last name" value={fname} onChange={(event) => {
                            setFname(event.target.value)
                        }} />
                    </div>
                    <div className="box">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" placeholder="enter last name" value={lname} onChange={
                            fixLastNameValue
                        } />
                    </div>
                    <div className="box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter email" value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </div>
                    <div className="box">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" placeholder="enter password" value={password} onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <div className="box">
                        <button >sumbit</button>
                    </div>
                </div>

            </form> */}


            <form onSubmit={formKiValue1koPrintKarega} >
                <div className="formContainer">
                    <div className="box">
                        <label htmlFor="fname" >First Name</label>
                        <input type="text" id="fname" name="fname" placeholder="enter last name" value={formValaData.fname} onChange={
                            formVALEObjectmeValueDalRheHai
                        } />
                    </div>
                    <div className="box">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" placeholder="enter last name" value={formValaData.lname} onChange={
                            formVALEObjectmeValueDalRheHai

                        } />
                    </div>
                    <div className="box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="enter email" value={formValaData.email} onChange={
                            formVALEObjectmeValueDalRheHai
                        } />
                    </div>
                    <div className="box">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" name="password" placeholder="enter password" value={formValaData.password} onChange={
                            formVALEObjectmeValueDalRheHai
                        } />
                    </div>
                    <div className="box">
                        <button >sumbit</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default Form
