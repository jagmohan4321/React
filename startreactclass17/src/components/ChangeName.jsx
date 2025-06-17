import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNameHandler, setDefaultNameHandler } from '../slices/changeNameSlice';
function ChangeName() {
  const uName = useSelector((state) => state.changeName.value)
  const dispatch = useDispatch();
  console.log("name ", uName)
  function handleName() {
    dispatch(changeNameHandler())
  }



  function setDefaultHandler() {
    dispatch(setDefaultNameHandler())
  }
  return (
    <div>
      <p>This is {uName}</p>
      <button onClick={() => {
        handleName()
      }}>chnageName</button>
      <button onClick={() => {
        setDefaultHandler()
      }}>chnageName</button>
    </div>
  )
}

export default ChangeName
