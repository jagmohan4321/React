import Name from "./Name.jsx"

function NameUser({NAME,LASTNAME}) {
  // console.log(props.NAME);
  // console.log(props['NAME']);
  
  
  return (
    <div>
      this file use properties which is coming from app.js file
      <Name userName={NAME} lastName={LASTNAME}/>
    </div>
  )
}

export default NameUser
