import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { percentageConverter } from '../slices/markSlice';

function ShowMark() {
  const user = {
    id: 101,
    uName: "Jagmohan"
  }
  const num = useSelector((state) => state.marks.value)
  const dispatch = useDispatch();

  function callRedux() {
    console.log("me call ho gya")
    dispatch(percentageConverter(user));
  }
  return (
    <div>
      <h1>This component use data from the redux</h1>
      <p>{num}</p>
      <button onClick={callRedux}>in percentage</button>
    </div>
  )
}

export default ShowMark
