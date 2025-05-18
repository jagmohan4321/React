import { useState } from "react"
import "./Form.css"
function Form() {


    // const [fName, setFname] = useState("abc");

    // const [lName, setLname] = useState("xyz");

    // const [email, setEmail] = useState("xyz@gmail.com");

    // const [pass, setPass] = useState("1234");

    // function changeFirstName(event) {

    //     setFname(event.target.value)

    // }

    // function printData(event) {
    //     event.preventDefault();
    //     console.log(fName, lName, email, pass)
    // }


    // object way 
    const [formData, setFormData] = useState({
        fName: "abc",
        lName: "xyz",
        email: "xyz@gmail.com",
        pass: "1234",
        careerProfile: "",
        gender: "",
        acceptPolicy: "true",
        date: "",
        files: ""


    });



    function setFormDataValue(event) {
        // setFormData(event.target.value)



        // setFormData((currentData) => {
        //     return { ...currentData, [event.target.name]: event.target.value }

        // })

        // const { name, value, type, checked } = event.target;
        // setFormData((currentData) => {
        //     return {
        //         ...currentData, [name]: type === "checkbox" ? checked : value

        //     }

        // })

        //manage all the cases
        const { name, value, type, checked } = event.target;
        setFormData((currentData) => {

             return {
                ...currentData, [name]:
                    type === "checkbox" ? checked:value
                       

            }

            // when youn use react form that time files is an array files[0]
            // return {
            //     ...currentData, [name]:
            //         type === "checkbox" ? checked
            //             : type === "file" ? formData.files : value

            // }

        })

    }

    function printDataForm(event) {
        event.preventDefault();
        console.log(formData)
        const { fName, lName, email, pass } = formData;
        console.log(fName, email, pass, lName)
    }


    return (
        <div>
            {/* <div className="container">
                <form onSubmit={printData} >

                    <div className="box">
                        <label htmlFor="fName">First Name</label>
                        <input type="text" id="fName" value={fName} placeholder="enter first name" onChange={changeFirstName} />

                    </div>
                    <div className="box">
                        <label htmlFor="">Last Name</label>
                        <input type="text" id="lName" value={lName} placeholder="enter Last name" onChange={(event) => {
                            setLname(event.target.value)
                        }} />

                    </div>
                    <div className="box">
                        <label htmlFor=""> Email</label>
                        <input type="email" id="email" value={email} placeholder="enter email " onChange={(event) => {
                            setEmail(event.target.value)
                        }} />

                    </div>
                    <div className="box">
                        <label htmlFor="">Password</label>
                        <input type="password" id="pass" value={pass} placeholder="enter Pasword" onChange={(event) => {
                            setPass(event.target.value)
                        }} />
                    </div>

                    <div className="box">
                        <button>submit</button>
                    </div>
                </form>
            </div> */}



            {/* 2nd way  */}

            <div className="container">
                <form onSubmit={printDataForm} >

                    <div className="box">
                        <label htmlFor="fName">First Name</label>
                        <input type="text" id="fName" name="fName" value={formData.fName} placeholder="enter first name" onChange={setFormDataValue} />

                    </div>
                    <div className="box">
                        <label htmlFor="">Last Name</label>
                        <input type="text" id="lName" name="lName" value={formData.lName} placeholder="enter Last name" onChange={setFormDataValue} />

                    </div>
                    <div className="box">
                        <label htmlFor=""> Email</label>
                        <input type="email" id="email" name="email" value={formData.email} placeholder="enter email " onChange={setFormDataValue} />

                    </div>
                    <div className="box">
                        <label htmlFor="">Password</label>
                        <input type="password" id="pass" name="pass" value={formData.pass} placeholder="enter Pasword" onChange={setFormDataValue} />
                    </div>

                    <div className="box">
                        <label htmlFor="careerProfile">Choose Your Domain-:</label>
                        <select name="careerProfile" id="careerProfile" value={formData.careerProfile} onChange={setFormDataValue}>
                            <option value="s/w">Enginner</option>
                            <option value="Govt.Employee">Govt.Employee</option>
                            <option value="Kuch nhi banoge">Kuch nhi banoge</option>
                        </select>
                    </div>

                    <div className="box">
                        <label htmlFor="careerProfile">Choose Gender:</label>
                        <input type="radio" name="gender" value="male" onChange={setFormDataValue} checked={formData.gender === "male"} />
                        <input type="radio" name="gender" value="feMale" onChange={setFormDataValue} checked={formData.gender === "feMale"} />
                        <input type="radio" name="gender" value="others" onChange={setFormDataValue} checked={formData.gender === "others"} />
                    </div>

                    <div className="box">
                        <label htmlFor="acceptPolicy">Accept our Policy?</label>
                        <input type="checkbox" id="acceptPolicy" name="acceptPolicy" onChange={setFormDataValue} checked={formData.acceptPolicy} />
                    </div>

                    <div className="box">
                        <label htmlFor="date">Today Date</label>
                        <input type="date" id="date" name="date" onChange={setFormDataValue} value={formData.date} />
                    </div>

                    <div className="box">
                        <label htmlFor="files">Choose Files</label>
                        <input type="file" id="files" name="files" onChange={setFormDataValue} checked={formData.files} />
                    </div>
                    <div className="box">
                        <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
