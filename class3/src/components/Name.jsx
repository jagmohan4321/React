import LastName from './LastName'
function Name({userName,lastName}) {
  return (
    <div>
        <p>ye to vhi hai na kon ???{userName}</p>
        <LastName lName={lastName}/>
      
    </div>
  )
}

export default Name
