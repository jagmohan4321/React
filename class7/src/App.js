

function App() {

  const nestedArr = [
    10,
    [2, 3, 5],
    1005,
    [
      [6,
        [0, 1500]
      ]
    ],

    [[[16, 44]]]]
  console.log(nestedArr[0]);
  console.log(nestedArr[1][1]);
  console.log(nestedArr[2]);
  console.log(nestedArr[3][0][1][1]);




  return (
    <div className="App">
      <p>App</p>
    </div>
  );
}

export default App;
